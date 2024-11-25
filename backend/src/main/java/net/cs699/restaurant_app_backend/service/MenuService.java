package net.cs699.restaurant_app_backend.service;

import net.cs699.restaurant_app_backend.dto.MenuDto;
import java.util.List;

public interface MenuService {
    MenuDto addMenu(MenuDto menu);

    MenuDto getMenuItemById(Long menuItemId);

    List<MenuDto> getAllMenuItems();

    MenuDto updateMenuItem(Long menuItemId, MenuDto updatedMenuItem);

    MenuDto deleteMenuItem(Long menuItemId);
}
