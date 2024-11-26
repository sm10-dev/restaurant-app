package net.cs699.restaurant_app_backend.service.impl;

import lombok.AllArgsConstructor;
import net.cs699.restaurant_app_backend.dto.OrdersDto;
import net.cs699.restaurant_app_backend.entity.Orders;
import net.cs699.restaurant_app_backend.exception.ResourceNotFoundException;
import net.cs699.restaurant_app_backend.mapper.OrdersMapper;
import net.cs699.restaurant_app_backend.repository.OrdersRepository;
import net.cs699.restaurant_app_backend.service.OrdersService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrdersServiceImpl implements OrdersService {

    private OrdersRepository ordersRepository;

    @Override
    public OrdersDto addOrder(OrdersDto menuDto) {

        Orders order = OrdersMapper.mapToOrders(menuDto);
        Orders savedOrders = ordersRepository.save(order);
        return OrdersMapper.mapToOrdersDto(savedOrders);
    }

    @Override
    public OrdersDto getOrderById(Long orderId) {
        Orders order = ordersRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with ID: " + orderId));

        return OrdersMapper.mapToOrdersDto(order);
    }

    @Override
    public List<OrdersDto> getAllOrders() {
        List<Orders> ordersList = ordersRepository.findAll();
        return ordersList.stream().map(OrdersMapper::mapToOrdersDto)
                .collect(Collectors.toList());
    }

    @Override
    public OrdersDto updateOrder(Long orderId, OrdersDto updatedOrder) {
        Orders order = ordersRepository.findById(orderId).orElseThrow(
                () -> new ResourceNotFoundException("Order not found with ID: " + orderId)
        );

        order.setUserEmail(updatedOrder.getUserEmail() == null || updatedOrder.getUserEmail().trim().isEmpty() ? order.getUserEmail() : updatedOrder.getUserEmail());
        order.setTotalAmount(updatedOrder.getTotalAmount() == null || updatedOrder.getTotalAmount() == 0 ? order.getTotalAmount() : updatedOrder.getTotalAmount());
        order.setStatus(updatedOrder.getStatus() == null || updatedOrder.getStatus().trim().isEmpty() ? order.getStatus() : updatedOrder.getStatus());

        Orders updateOrdersItemObject = ordersRepository.save(order);

        return OrdersMapper.mapToOrdersDto(updateOrdersItemObject);
    }

    @Override
    public OrdersDto deleteOrder(Long orderId) {
        Orders order = ordersRepository.findById(orderId).orElseThrow(
                () -> new ResourceNotFoundException("Order not found with ID: " + orderId)
        );

        ordersRepository.deleteById(orderId);

        return OrdersMapper.mapToOrdersDto(order);
    }
}
