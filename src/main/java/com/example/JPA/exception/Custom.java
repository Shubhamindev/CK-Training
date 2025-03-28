package com.example.JPA.exception;

import lombok.Getter;

@Getter
public class Custom extends RuntimeException {
    private String message;

    public Custom() {}

    public Custom(String msg) {
        super(msg);
        this.message = msg;
    }
}
