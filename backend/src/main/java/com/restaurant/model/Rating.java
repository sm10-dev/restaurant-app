// backend/src/main/java/com/restaurant/model/Rating.java

package com.restaurant.model;

import javax.persistence.*;

@Entity
@Table(name = "ratings")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long dishId;
    private Integer ratingValue;
    private Timestamp ratedAt;

    @PrePersist
    protected void onCreate() {
        ratedAt = new Timestamp(System.currentTimeMillis());
    }

    // Getters and Setters
    // ...
}
