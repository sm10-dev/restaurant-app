package com.restaurant.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {

    @GetMapping("/menu")
    public String getMenu() {
        return "[{\"id\": 1, \"name\": \"Pizza\", \"price\": 12.99}, {\"id\": 2, \"name\": \"Burger\", \"price\": 8.99}]";
    }
}
