package net.cs699.restaurant_app_backend.repository;

import net.cs699.restaurant_app_backend.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface MenuRepository extends JpaRepository<Menu, Long> {
    List<Menu> findByIsPopularTrue();
    List<Menu> findByIsSpecialTrue();
}

