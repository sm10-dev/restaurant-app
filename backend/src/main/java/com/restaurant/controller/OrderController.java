package com.restaurant.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    @GetMapping("/order/status")
    public String getOrderStatus() {
        // Dummy response for order status
        return "{\"status\": \"Preparing\"}";
    }
}
