package com.project.gallerybackend.controller;

import com.project.gallerybackend.dto.AccountDto;
import com.project.gallerybackend.dto.Member;
import com.project.gallerybackend.repository.MemberRepository;
import com.project.gallerybackend.service.JwtService;
import com.project.gallerybackend.service.JwtServiceImpl;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AccountController {

    private final MemberRepository memberRepository;

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
        throw  new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

}
