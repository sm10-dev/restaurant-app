// backend/src/main/java/com/restaurant/controller/FeedbackRatingController.java

package com.restaurant.controller;

import com.restaurant.model.Feedback;
import com.restaurant.model.Rating;
import com.restaurant.repository.FeedbackRepository;
import com.restaurant.repository.RatingRepository;
import com.restaurant.dto.FeedbackRatingRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class FeedbackRatingController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private RatingRepository ratingRepository;

    @PostMapping("/feedback-rating")
    public ResponseEntity<String> submitFeedbackAndRating(
            @Valid @RequestBody FeedbackRatingRequest request) {

        Feedback feedback = new Feedback();
        feedback.setDishId(request.getDishId());
        feedback.setFeedbackText(request.getFeedbackText());
        feedbackRepository.save(feedback);

        Rating rating = new Rating();
        rating.setDishId(request.getDishId());
        rating.setRatingValue(request.getRatingValue());
        ratingRepository.save(rating);

        return ResponseEntity.ok("Feedback and rating submitted successfully.");
    }
}
