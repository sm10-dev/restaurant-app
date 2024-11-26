package net.cs699.restaurant_app_backend.repository;

import net.cs699.restaurant_app_backend.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}

