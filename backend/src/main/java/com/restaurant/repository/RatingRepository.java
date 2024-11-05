// backend/src/main/java/com/restaurant/repository/RatingRepository.java

package com.restaurant.repository;

import com.restaurant.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
    // Additional query methods if needed
}
