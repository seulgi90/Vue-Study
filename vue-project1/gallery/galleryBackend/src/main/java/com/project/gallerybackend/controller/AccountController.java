package com.project.gallerybackend.controller;

import com.project.gallerybackend.dto.AccountDto;
import com.project.gallerybackend.dto.Member;
import com.project.gallerybackend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AccountController {

    private final MemberRepository memberRepository;

    @PostMapping("/api/account/login")
    public int login(@RequestBody AccountDto account) {
        Member member = memberRepository.findByEmailAndPassword(account.getEmail(), account.getPassword());
        if (member != null) {
            member.getId();
        }
        return 0;
    }

}
