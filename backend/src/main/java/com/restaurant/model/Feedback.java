// backend/src/main/java/com/restaurant/model/Feedback.java

package com.restaurant.model;

import javax.persistence.*;

@Entity
@Table(name = "feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long dishId;
    private String feedbackText;
    private Timestamp submittedAt;

    @PrePersist
    protected void onCreate() {
        submittedAt = new Timestamp(System.currentTimeMillis());
    }

    // Getters and Setters
    // ...
}
