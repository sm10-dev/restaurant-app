package net.cs699.restaurant_app_backend.repository;

import net.cs699.restaurant_app_backend.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MenuRepository extends JpaRepository<Menu, Long> {

}

