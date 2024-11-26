package net.cs699.restaurant_app_backend.mapper;

import net.cs699.restaurant_app_backend.dto.OrdersDto;
import net.cs699.restaurant_app_backend.entity.Orders;

public class OrdersMapper {

    public static OrdersDto mapToOrdersDto(Orders orders) {
        return new OrdersDto(
                orders.getId(),
                orders.getUserEmail(),
                orders.getTotalAmount(),
                orders.getStatus(),
                orders.getOrderDate(),
                orders.getUpdatedAt()
        );
    }

    public static Orders mapToOrders(OrdersDto ordersDto) {
        return new Orders(
                ordersDto.getId(),
                ordersDto.getUserEmail(),
                ordersDto.getTotalAmount(),
                ordersDto.getStatus(),
                ordersDto.getOrderDate(),
                ordersDto.getUpdatedAt()
        );
    }
}
