package com.example.JPA.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomResponse {
    private int statusCode;
    private String message;
    private Object data;
    public CustomResponse(int status, String message, Object data)
    {
        this.message = message;
        this.statusCode = status;
        this.data = data;
    }
}