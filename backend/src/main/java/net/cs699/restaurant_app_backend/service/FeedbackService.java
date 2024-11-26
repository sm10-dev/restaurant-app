package net.cs699.restaurant_app_backend.service;

import net.cs699.restaurant_app_backend.dto.FeedbackDto;
import java.util.List;

public interface FeedbackService {
    FeedbackDto addFeedback(FeedbackDto menu);

    FeedbackDto getFeedbackById(Long feedBackId);

    List<FeedbackDto> getAllFeedbacks();

    FeedbackDto updateFeedback(Long feedBackId, FeedbackDto updatedFeedback);

    FeedbackDto deleteFeedback(Long feedBackId);
}
