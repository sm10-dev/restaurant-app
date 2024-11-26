package net.cs699.restaurant_app_backend.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jdk.jfr.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.UniqueElements;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackDto {
    private Long id;

    @NotBlank(message = "Name cannot be blank")
    private String name;

    @NotBlank(message = "Email cannot be blank")
    private String email;

    @NotBlank(message = "Message cannot be blank")
    private String message;

    @Min(value = 1, message = "Value should be greater than or equal to 1")
    @Max(value = 5, message = "Price should be lesser than or equal to 5")
    private Integer rating;

    private LocalDateTime feedbackDate = LocalDateTime.now();
}
