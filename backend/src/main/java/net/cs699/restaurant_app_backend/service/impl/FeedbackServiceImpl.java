package net.cs699.restaurant_app_backend.service.impl;

import lombok.AllArgsConstructor;
import net.cs699.restaurant_app_backend.dto.FeedbackDto;
import net.cs699.restaurant_app_backend.entity.Feedback;
import net.cs699.restaurant_app_backend.exception.ResourceNotFoundException;
import net.cs699.restaurant_app_backend.mapper.FeedbackMapper;
import net.cs699.restaurant_app_backend.repository.FeedbackRepository;
import net.cs699.restaurant_app_backend.service.FeedbackService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    private FeedbackRepository feedbackRepository;

    @Override
    public FeedbackDto addFeedback(FeedbackDto feedbackDto) {

        Feedback menu = FeedbackMapper.mapToFeedback(feedbackDto);
        Feedback savedFeedback = feedbackRepository.save(menu);
        return FeedbackMapper.mapToFeedbackDto(savedFeedback);
    }

    @Override
    public FeedbackDto getFeedbackById(Long feedbackId) {
        Feedback menu = feedbackRepository.findById(feedbackId)
                .orElseThrow(() -> new ResourceNotFoundException("Feedback not found with ID: " + feedbackId));

        return FeedbackMapper.mapToFeedbackDto(menu);
    }

    @Override
    public List<FeedbackDto> getAllFeedbacks() {
        List<Feedback> menuItemList = feedbackRepository.findAll();
        return menuItemList.stream().map(FeedbackMapper::mapToFeedbackDto)
                .collect(Collectors.toList());
    }

    @Override
    public FeedbackDto updateFeedback(Long feedbackId, FeedbackDto updatedFeedbackItem) {
        Feedback feedback = feedbackRepository.findById(feedbackId).orElseThrow(
                () -> new ResourceNotFoundException("Feedback not found with ID: " + feedbackId)
        );

        feedback.setRating(updatedFeedbackItem.getRating() == 0 ? feedback.getRating() : updatedFeedbackItem.getRating());
        feedback.setMessage(updatedFeedbackItem.getMessage() == null || updatedFeedbackItem.getMessage().trim().isEmpty() ? feedback.getMessage() : updatedFeedbackItem.getMessage());

        Feedback updateFeedbackItemObject = feedbackRepository.save(feedback);

        return FeedbackMapper.mapToFeedbackDto(updateFeedbackItemObject);
    }

    @Override
    public FeedbackDto deleteFeedback(Long feedbackId) {
        Feedback Feedback = feedbackRepository.findById(feedbackId).orElseThrow(
                () -> new ResourceNotFoundException("Feedback not found with ID: " + feedbackId)
        );

        feedbackRepository.deleteById(feedbackId);

        return FeedbackMapper.mapToFeedbackDto(Feedback);
    }
}
