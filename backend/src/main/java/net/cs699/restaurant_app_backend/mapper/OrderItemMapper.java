package net.cs699.restaurant_app_backend.mapper;

import net.cs699.restaurant_app_backend.dto.OrderItemDto;
import net.cs699.restaurant_app_backend.entity.Menu;
import net.cs699.restaurant_app_backend.entity.OrderItem;
import net.cs699.restaurant_app_backend.entity.Orders;
import net.cs699.restaurant_app_backend.service.MenuService;
import net.cs699.restaurant_app_backend.service.OrdersService;
import net.cs699.restaurant_app_backend.util.SpringContextHolder;


public class OrderItemMapper {

    public static OrderItemDto mapToOrderItemDto(OrderItem orderItem) {
        if (orderItem == null) {
            return null;
        }

        return new OrderItemDto(
                orderItem.getId(),
                orderItem.getOrder().getId(),
                orderItem.getMenu().getId(),
                orderItem.getQuantity(),
                orderItem.getPrice()
        );
    }


    public static OrderItem mapToOrderItem(OrderItemDto orderItemDto) {

        OrdersService ordersService = SpringContextHolder.getBean(OrdersService.class);
        MenuService menuService = SpringContextHolder.getBean(MenuService.class);

        Orders order = OrdersMapper.mapToOrders(ordersService.getOrderById(orderItemDto.getOrderId()));
        Menu menu = MenuMapper.mapToMenu(menuService.getMenuItemById(orderItemDto.getMenuId()));

        System.out.println(order.getId());
        System.out.println(menu.getItemName());

        return new OrderItem(
                orderItemDto.getId(),
                order,
                menu,
                orderItemDto.getQuantity(),
                orderItemDto.getPrice()
        );
    }
}
