package net.cs699.restaurant_app_backend.repository;

import net.cs699.restaurant_app_backend.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}

