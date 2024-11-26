package net.cs699.restaurant_app_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Lob
    @Column(name = "message", length = 700)
    private String message;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "feedback_date", updatable = false)
    @org.hibernate.annotations.CreationTimestamp
    private LocalDateTime feedbackDate;
}
