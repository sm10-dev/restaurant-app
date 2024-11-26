package net.cs699.restaurant_app_backend.mapper;

import net.cs699.restaurant_app_backend.dto.FeedbackDto;
import net.cs699.restaurant_app_backend.entity.Feedback;

public class FeedbackMapper {

    public static FeedbackDto mapToFeedbackDto(Feedback feedback) {
        return new FeedbackDto(
                feedback.getId(),
                feedback.getName(),
                feedback.getEmail(),
                feedback.getMessage(),
                feedback.getRating(),
                feedback.getFeedbackDate()
        );
    }

    public static Feedback mapToFeedback(FeedbackDto feedbackDto) {
        return new Feedback(
                feedbackDto.getId(),
                feedbackDto.getName(),
                feedbackDto.getEmail(),
                feedbackDto.getMessage(),
                feedbackDto.getRating(),
                feedbackDto.getFeedbackDate()
        );
    }
}
