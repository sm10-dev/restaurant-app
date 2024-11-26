package net.cs699.restaurant_app_backend.service;

import net.cs699.restaurant_app_backend.dto.OrdersDto;
import java.util.List;

public interface OrdersService {
    OrdersDto addOrder(OrdersDto order);

    OrdersDto getOrderById(Long orderId);

    List<OrdersDto> getAllOrders();

    OrdersDto updateOrder(Long orderId, OrdersDto updatedOrder);

    OrdersDto deleteOrder(Long orderId);
}
