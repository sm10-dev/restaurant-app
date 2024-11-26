package net.cs699.restaurant_app_backend.repository;

import net.cs699.restaurant_app_backend.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrdersRepository extends JpaRepository<Orders, Long> {

}

