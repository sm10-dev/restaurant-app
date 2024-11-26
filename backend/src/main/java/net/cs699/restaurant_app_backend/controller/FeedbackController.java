package net.cs699.restaurant_app_backend.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import net.cs699.restaurant_app_backend.dto.FeedbackDto;
import net.cs699.restaurant_app_backend.service.FeedbackService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    private FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<FeedbackDto> addFeedback(@Valid @RequestBody FeedbackDto feedbackDto) {
        FeedbackDto savedMenu = feedbackService.addFeedback(feedbackDto);
        return new ResponseEntity<>(savedMenu, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public  ResponseEntity<FeedbackDto> getFeedbackById(@PathVariable("id") Long feedbackId) {
        FeedbackDto feedbackDto = feedbackService.getFeedbackById(feedbackId);
        return ResponseEntity.ok(feedbackDto);
    }

    @GetMapping
    public ResponseEntity<List<FeedbackDto>> getAllMenuItems() {
        List<FeedbackDto> menuItemDtoList = feedbackService.getAllFeedbacks();
        return ResponseEntity.ok(menuItemDtoList);
    }

    @PutMapping("{id}")
    public ResponseEntity<FeedbackDto> updateMenuItem(@PathVariable("id") Long feedbackId,@RequestBody FeedbackDto updateFeedback) {
        FeedbackDto feedbackDto = feedbackService.updateFeedback(feedbackId, updateFeedback);
        return ResponseEntity.ok(feedbackDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<FeedbackDto> deleteMenuItem(@PathVariable("id") Long feedbackId) {
        FeedbackDto feedbackDto = feedbackService.deleteFeedback(feedbackId);
        return ResponseEntity.ok(feedbackDto);
    }
}
