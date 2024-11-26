package net.cs699.restaurant_app_backend.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import net.cs699.restaurant_app_backend.dto.OrdersDto;
import net.cs699.restaurant_app_backend.service.OrdersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/orders")
public class OrdersController {

    private OrdersService ordersService;

    @PostMapping
    public ResponseEntity<OrdersDto> addOrder(@Valid @RequestBody OrdersDto ordersDto) {
        OrdersDto savedMenu = ordersService.addOrder(ordersDto);
        return new ResponseEntity<>(savedMenu, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public  ResponseEntity<OrdersDto> getOrderById(@PathVariable("id") Long orderId) {
        OrdersDto OrdersDto = ordersService.getOrderById(orderId);
        return ResponseEntity.ok(OrdersDto);
    }

    @GetMapping
    public ResponseEntity<List<OrdersDto>> getAllOrders() {
        List<OrdersDto> menuItemDtoList = ordersService.getAllOrders();
        return ResponseEntity.ok(menuItemDtoList);
    }

    @PutMapping("{id}")
    public ResponseEntity<OrdersDto> updateOrder(@PathVariable("id") Long orderId,@RequestBody OrdersDto updateOrder) {
        OrdersDto OrdersDto = ordersService.updateOrder(orderId, updateOrder);
        return ResponseEntity.ok(OrdersDto);
    }

}
