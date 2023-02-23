package com.codecool.App.controllers;

import com.codecool.App.models.Message;
import com.codecool.App.models.Student;
import com.codecool.App.security.jwt.JwtUtils;
import com.codecool.App.security.services.UserDetailsImpl;
import com.codecool.App.service.MessageService;
import com.codecool.App.service.StudentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PhysicsAiController {

    private final String apiKey = "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";
    private final String endpoint = "https://api.openai.com/v1/completions";

    private final MessageService messageService;
    private final StudentService studentService;

    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    public PhysicsAiController(MessageService messageService, StudentService studentService) {
        this.messageService = messageService;
        this.studentService = studentService;
    }

    @PostMapping("/Physicsai")
    public String generateResponse(@RequestBody String prompt, @RequestHeader("Authorization") String token) throws JsonProcessingException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        JsonNode requestJson = new ObjectMapper().createObjectNode()
                .put("model", "text-davinci-003")
                .put("prompt", "Answer like a Physics Teacher, a genius in Physics. And do not accept other questions from anything else. Try to be as explicit as possible. Be interested to help an give live support for the student to complete his homeworks and fulfill his knowledge.\n" +
                        prompt)
                .put("max_tokens", 500);

        HttpEntity<JsonNode> request = new HttpEntity<>(requestJson, headers);
        ResponseEntity<String> response = restTemplate.exchange(endpoint, HttpMethod.POST, request, String.class);
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(response.getBody());
        String responseText = jsonNode.get("choices").get(0).get("text").asText();

        // Get the current student from the authentication object
        Student student = null;
        if (authentication != null && authentication.isAuthenticated() && token != null) {
            String username = jwtUtils.getUserNameFromJwtToken(token.substring(7));
            Optional<Student> optionalStudent = studentService.findByUsername(username);
            if (optionalStudent.isPresent()) {
                student = optionalStudent.get();
            }
        }
        if (student != null) {
            // Create a new message and associate it with the user
            Message message = new Message();
            String promptValue = prompt.substring(prompt.indexOf(":") + 2, prompt.length() - 2);
            message.setPrompt(promptValue);
            message.setResponse(responseText);
            message.setStudent(student.getUsername());
            message.setCourse("Physics");
            messageService.save(message);
        }
        return responseText;
    }

//    @GetMapping("/physics-asked-questions")
//    public List<Message> getAllMessagesForCurrentUser() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String username = ((UserDetailsImpl) authentication.getPrincipal()).getUsername();
//
//        Optional<Student> optionalStudent = studentService.findByUsername(username);
//        if (optionalStudent.isPresent()) {
//            Student student = optionalStudent.get();
//            return messageService.getAllMessagesForUser(student.getUsername());
//        } else {
//            throw new RuntimeException("Error: Student not found.");
//        }
//    }
    @GetMapping("/physics-course")
    public List<Message> getAllMessagesForCurrentUser(@RequestParam(name = "course", required = false) String course) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principal = authentication.getPrincipal(); // Get the principal object

        if (principal instanceof UserDetailsImpl) { // Check if the principal is an instance of UserDetailsImpl
            String username = ((UserDetailsImpl) principal).getUsername();

            Optional<Student> optionalStudent = studentService.findByUsername(username);
            if (optionalStudent.isPresent()) {
                Student student = optionalStudent.get();
                if (course != null) {
                    return messageService.getMessagesByCourseAndStudent(course, student.getUsername());
                } else {
                    return messageService.getAllMessagesForUser(student.getUsername());
                }
            } else {
                throw new RuntimeException("Error: Student not found.");
            }
        } else { // Handle case when the principal is not an instance of UserDetailsImpl
            return Collections.emptyList();
        }
    }
}


