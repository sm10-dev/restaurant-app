package net.cs699.restaurant_app_backend.service;

import net.cs699.restaurant_app_backend.dto.OrderItemDto;

import java.util.List;

public interface OrderItemService {
    OrderItemDto addOrderItem(OrderItemDto orderItem);

    OrderItemDto getOrderItemById(Long orderItemId);

    List<OrderItemDto> getAllOrderItems();

    OrderItemDto updateOrderItem(Long orderItemId, OrderItemDto updatedOrderItem);

    OrderItemDto deleteOrderItem(Long orderItemId);
}
