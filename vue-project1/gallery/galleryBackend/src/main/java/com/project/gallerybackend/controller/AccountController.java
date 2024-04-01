package com.project.gallerybackend.controller;

import com.project.gallerybackend.dto.AccountDto;
import com.project.gallerybackend.dto.Member;
import com.project.gallerybackend.repository.MemberRepository;
import com.project.gallerybackend.service.JwtService;
import com.project.gallerybackend.service.JwtServiceImpl;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequiredArgsConstructor
public class AccountController {

    private final MemberRepository memberRepository;
    private final JwtServiceImpl jwtServiceImpl ;

    @PostMapping("/api/account/login")
    public ResponseEntity login(@RequestBody AccountDto account, HttpServletResponse res) {
        Member member = memberRepository.findByEmailAndPassword(account.getEmail(), account.getPassword());
        if (member != null) {
            JwtService jwtService = new JwtServiceImpl();

            int id =  member.getId();
            String token = jwtService.getToken("id", id);
            Cookie cookie = new Cookie("token", token);
            cookie.setHttpOnly(true);
            cookie.setPath("/");

            res.addCookie(cookie);
            return new ResponseEntity<>(id, HttpStatus.OK);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/api/account/check")
    public ResponseEntity check(@CookieValue(value = "token", required = false) String token) {
        Claims claims = jwtServiceImpl.getClaims(token);
        if (claims != null) {
            int id = Integer.parseInt(claims.get("id").toString());
            return new ResponseEntity<>(id, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
