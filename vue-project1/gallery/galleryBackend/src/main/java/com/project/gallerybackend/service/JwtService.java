package com.project.gallerybackend.service;

import io.jsonwebtoken.Claims;

public interface JwtService {

    String getToken(String key, Object value);

    Claims getClaims(String token);
}
