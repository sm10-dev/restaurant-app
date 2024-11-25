package net.cs699.restaurant_app_backend.service.impl;

import lombok.AllArgsConstructor;
import net.cs699.restaurant_app_backend.dto.MenuDto;
import net.cs699.restaurant_app_backend.entity.Menu;
import net.cs699.restaurant_app_backend.exception.ResourceNotFoundException;
import net.cs699.restaurant_app_backend.mapper.MenuMapper;
import net.cs699.restaurant_app_backend.repository.MenuRepository;
import net.cs699.restaurant_app_backend.service.MenuService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MenuServiceImpl implements MenuService {

    private MenuRepository menuRepository;

    @Override
    public MenuDto addMenu(MenuDto menuDto) {

        Menu menu = MenuMapper.mapToMenu(menuDto);
        Menu savedMenu = menuRepository.save(menu);
        return MenuMapper.mapToMenuDto(savedMenu);
    }

    @Override
    public MenuDto getMenuItemById(Long menuItemId) {
        Menu menu = menuRepository.findById(menuItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Menu item not found with ID: " + menuItemId));

        return MenuMapper.mapToMenuDto(menu);
    }

    @Override
    public List<MenuDto> getAllMenuItems() {
        List<Menu> menuItemList = menuRepository.findAll();
        return menuItemList.stream().map(MenuMapper::mapToMenuDto)
                .collect(Collectors.toList());
    }

    @Override
    public MenuDto updateMenuItem(Long menuItemId, MenuDto updatedMenuItem) {
        Menu menu = menuRepository.findById(menuItemId).orElseThrow(
                () -> new ResourceNotFoundException("Menu item not found with ID: " + menuItemId)
        );

        menu.setItemName(updatedMenuItem.getItemName() == null || updatedMenuItem.getItemName().trim().isEmpty() ? menu.getItemName() : updatedMenuItem.getItemName());
        menu.setDescription(updatedMenuItem.getDescription() == null || updatedMenuItem.getDescription().trim().isEmpty() ? menu.getDescription() : updatedMenuItem.getDescription());
        menu.setCategory(updatedMenuItem.getCategory() == null || updatedMenuItem.getCategory().trim().isEmpty() ? menu.getCategory() : updatedMenuItem.getCategory());
        menu.setPrice(updatedMenuItem.getPrice() == 0 ? menu.getPrice() : updatedMenuItem.getPrice());

        Menu updateMenuItemObject = menuRepository.save(menu);

        return MenuMapper.mapToMenuDto(updateMenuItemObject);
    }

    @Override
    public MenuDto deleteMenuItem(Long menuItemId) {
        Menu Menu = menuRepository.findById(menuItemId).orElseThrow(
                () -> new ResourceNotFoundException("Menu item not found with ID: " + menuItemId)
        );

        menuRepository.deleteById(menuItemId);

        return MenuMapper.mapToMenuDto(Menu);
    }
}
