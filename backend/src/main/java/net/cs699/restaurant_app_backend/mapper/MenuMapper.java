package net.cs699.restaurant_app_backend.mapper;

import net.cs699.restaurant_app_backend.dto.MenuDto;
import net.cs699.restaurant_app_backend.entity.Menu;

public class MenuMapper {

    public static MenuDto mapToMenuDto(Menu menu) {
        return new MenuDto(
                menu.getId(),
                menu.getItemName(),
                menu.getDescription(),
                menu.getCategory(),
                menu.getPrice(),
                menu.getImageUrl(),
                menu.getIsPopular(),
                menu.getIsSpecial()
        );
    }

    public static Menu mapToMenu(MenuDto menuDto) {
        return new Menu(
                menuDto.getId(),
                menuDto.getItemName(),
                menuDto.getDescription(),
                menuDto.getCategory(),
                menuDto.getPrice(),
                menuDto.getImageUrl(),
                menuDto.getIsPopular(),
                menuDto.getIsSpecial()
        );
    }
}
