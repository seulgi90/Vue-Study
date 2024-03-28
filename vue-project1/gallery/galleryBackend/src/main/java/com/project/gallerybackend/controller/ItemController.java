package com.project.gallerybackend.controller;

import com.project.gallerybackend.entity.Item;
import com.project.gallerybackend.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemController {

    private final ItemRepository itemRepository;

    @GetMapping("/api/items")
    public List<Item> getItems() {

        List<Item> items = itemRepository.findAll();

        return items;
    }
}
