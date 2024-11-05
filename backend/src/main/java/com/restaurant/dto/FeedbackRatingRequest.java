// backend/src/main/java/com/restaurant/dto/FeedbackRatingRequest.java

package com.restaurant.dto;

import javax.validation.constraints.NotNull;

public class FeedbackRatingRequest {

    @NotNull
    private Long dishId;

    @NotNull
    private String feedbackText;

    @NotNull
    private Integer ratingValue;

    // Getters and Setters
    // ...
}
