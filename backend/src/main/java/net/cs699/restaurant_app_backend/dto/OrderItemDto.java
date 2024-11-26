package net.cs699.restaurant_app_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDto {

    private Long id;
    private Long orderId;
    private Long menuId;
    private Integer quantity;
    private Double price;
}
