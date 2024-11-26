package net.cs699.restaurant_app_backend.service.impl;

import lombok.AllArgsConstructor;
import net.cs699.restaurant_app_backend.dto.OrderItemDto;
import net.cs699.restaurant_app_backend.entity.OrderItem;
import net.cs699.restaurant_app_backend.exception.ResourceNotFoundException;
import net.cs699.restaurant_app_backend.mapper.OrderItemMapper;
import net.cs699.restaurant_app_backend.repository.OrderItemRepository;
import net.cs699.restaurant_app_backend.service.OrderItemService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderItemServiceImpl implements OrderItemService {

    private OrderItemRepository orderItemRepository;

    @Override
    public OrderItemDto addOrderItem(OrderItemDto menuDto) {

        OrderItem order = OrderItemMapper.mapToOrderItem(menuDto);
        OrderItem savedOrderItem = orderItemRepository.save(order);
        return OrderItemMapper.mapToOrderItemDto(savedOrderItem);
    }

    @Override
    public OrderItemDto getOrderItemById(Long orderItemId) {
        OrderItem order = orderItemRepository.findById(orderItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Order item not found with ID: " + orderItemId));

        return OrderItemMapper.mapToOrderItemDto(order);
    }

    @Override
    public List<OrderItemDto> getAllOrderItems() {
        List<OrderItem> ordersList = orderItemRepository.findAll();
        return ordersList.stream().map(OrderItemMapper::mapToOrderItemDto)
                .collect(Collectors.toList());
    }

    @Override
    public OrderItemDto updateOrderItem(Long orderItemId, OrderItemDto updatedOrderItem) {
        OrderItem orderItem = orderItemRepository.findById(orderItemId).orElseThrow(
                () -> new ResourceNotFoundException("Order item not found with ID: " + orderItemId)
        );

        orderItem.setQuantity(updatedOrderItem.getQuantity() == null || updatedOrderItem.getQuantity() == 0 ? orderItem.getQuantity() : updatedOrderItem.getQuantity());
        orderItem.setPrice(updatedOrderItem.getPrice() == null || updatedOrderItem.getPrice() == 0 ? orderItem.getPrice() : updatedOrderItem.getPrice());

        OrderItem updateOrderItemItemObject = orderItemRepository.save(orderItem);

        return OrderItemMapper.mapToOrderItemDto(updateOrderItemItemObject);
    }

    @Override
    public OrderItemDto deleteOrderItem(Long orderItemId) {
        OrderItem order = orderItemRepository.findById(orderItemId).orElseThrow(
                () -> new ResourceNotFoundException("Order item not found with ID: " + orderItemId)
        );

        orderItemRepository.deleteById(orderItemId);

        return OrderItemMapper.mapToOrderItemDto(order);
    }
}
