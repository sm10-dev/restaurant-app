// backend/src/main/java/com/restaurant/repository/FeedbackRepository.java

package com.restaurant.repository;

import com.restaurant.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    // Additional query methods if needed
}
