package net.cs699.restaurant_app_backend.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import net.cs699.restaurant_app_backend.dto.OrderItemDto;
import net.cs699.restaurant_app_backend.service.OrderItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/orderitem")
public class OrderItemController {

    private OrderItemService orderItemService;

    @PostMapping
    public ResponseEntity<OrderItemDto> addOrder(@Valid @RequestBody OrderItemDto ordersDto) {
        OrderItemDto savedMenu = orderItemService.addOrderItem(ordersDto);
        return new ResponseEntity<>(savedMenu, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public  ResponseEntity<OrderItemDto> getOrderById(@PathVariable("id") Long orderId) {
        OrderItemDto OrderItemDto = orderItemService.getOrderItemById(orderId);
        return ResponseEntity.ok(OrderItemDto);
    }

    @GetMapping
    public ResponseEntity<List<OrderItemDto>> getAllOrders() {
        List<OrderItemDto> menuItemDtoList = orderItemService.getAllOrderItems();
        return ResponseEntity.ok(menuItemDtoList);
    }

    @PutMapping("{id}")
    public ResponseEntity<OrderItemDto> updateOrder(@PathVariable("id") Long orderId,@RequestBody OrderItemDto updateOrder) {
        OrderItemDto OrderItemDto = orderItemService.updateOrderItem(orderId, updateOrder);
        return ResponseEntity.ok(OrderItemDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<OrderItemDto> deleteOrder(@PathVariable("id") Long orderId) {
        OrderItemDto OrderItemDto = orderItemService.deleteOrderItem(orderId);
        return ResponseEntity.ok(OrderItemDto);
    }
}
