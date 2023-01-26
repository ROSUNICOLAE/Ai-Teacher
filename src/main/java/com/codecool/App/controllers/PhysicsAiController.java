package com.codecool.App.controllers;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PhysicsAiController {

    private final String apiKey = "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";
    private final String endpoint = "https://api.openai.com/v1/completions";

    @PostMapping("/Physicsai")
    public String generateResponse(@RequestBody String prompt) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        JsonNode requestJson = new ObjectMapper().createObjectNode()
                .put("model", "text-davinci-003")
                .put("prompt", "Answer like a Physics Teacher, a genius in Physics.And do not accept other questions from anything else. Try to answer in Romanian language.And try to be as explicit as possible.\n" +
                        prompt)
                .put("max_tokens", 500);
        ;
        System.out.println(requestJson);

        HttpEntity<JsonNode> request = new HttpEntity<>(requestJson, headers);
        ResponseEntity<String> response = restTemplate.exchange(endpoint, HttpMethod.POST, request, String.class);
        System.out.println(response);
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(response.getBody());
        return jsonNode.get("choices").get(0).get("text").asText();
    }

}



