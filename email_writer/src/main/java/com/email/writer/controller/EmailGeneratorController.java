package com.email.writer.controller;

import com.email.writer.service.EmailGeneratorService;
import com.email.writer.model.EmailRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailGeneratorController {
    private final EmailGeneratorService emailGeneratorService;
@PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest)
    {
        String response=emailGeneratorService.GenerateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}
