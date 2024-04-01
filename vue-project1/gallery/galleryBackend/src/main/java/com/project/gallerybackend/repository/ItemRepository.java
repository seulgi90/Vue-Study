package com.project.gallerybackend.repository;

import com.project.gallerybackend.dto.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
