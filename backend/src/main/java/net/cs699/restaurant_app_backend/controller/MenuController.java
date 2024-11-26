package net.cs699.restaurant_app_backend.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import net.cs699.restaurant_app_backend.dto.MenuDto;
import net.cs699.restaurant_app_backend.service.MenuService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private MenuService menuService;

    @PostMapping
    public ResponseEntity<MenuDto> addMenu(@Valid @RequestBody MenuDto menuDto) {
        MenuDto savedMenu = menuService.addMenu(menuDto);
        return new ResponseEntity<>(savedMenu, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public  ResponseEntity<MenuDto> getMenuById(@PathVariable("id") Long menuItemId) {
        MenuDto menuDto = menuService.getMenuItemById(menuItemId);
        return ResponseEntity.ok(menuDto);
    }

    @GetMapping
    public ResponseEntity<List<MenuDto>> getAllMenuItems() {
        List<MenuDto> menuItemDtoList = menuService.getAllMenuItems();
        return ResponseEntity.ok(menuItemDtoList);
    }

    @PutMapping("{id}")
    public ResponseEntity<MenuDto> updateMenuItem(@PathVariable("id") Long menuItemId,@RequestBody MenuDto updateMenuItem) {
        MenuDto menuDto = menuService.updateMenuItem(menuItemId, updateMenuItem);
        return ResponseEntity.ok(menuDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<MenuDto> deleteMenuItem(@PathVariable("id") Long menuItemId) {
        MenuDto menuDto = menuService.deleteMenuItem(menuItemId);
        return ResponseEntity.ok(menuDto);
    }

    @GetMapping("/popular")
    public ResponseEntity<List<MenuDto>> getAllPopularItems() {
        List<MenuDto> menuItemDtoList = menuService.getAllPopularItems();
        return ResponseEntity.ok(menuItemDtoList);
    }

    @GetMapping("/special")
    public ResponseEntity<List<MenuDto>> getAllSpecialItems() {
        List<MenuDto> menuItemDtoList = menuService.getAllSpecialItems();
        return ResponseEntity.ok(menuItemDtoList);
    }
}
