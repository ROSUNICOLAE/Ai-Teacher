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
public class CapitalController {
    //TODO in app prop
    private final String apiKey = "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";
    private final String endpoint = "https://api.openai.com/v1/engines/davinci/completions";

    @PostMapping("/capital")
    public String generateResponse(@RequestBody String prompt) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        HttpEntity<String> request = new HttpEntity<>(prompt, headers);
        ResponseEntity<String> response = restTemplate.exchange(endpoint, HttpMethod.POST, request, String.class);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(response.getBody());
        return jsonNode.get("choices").get(0).get("text").toString();
    }
}



