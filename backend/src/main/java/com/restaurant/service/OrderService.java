
package com.restaurant.service;

import org.springframework.stereotype.Service;

@Service
public class OrderService {

    public String getOrderStatus(int orderId) {
        // Simulate fetching order status from DB
        return "Preparing";
    }
}
