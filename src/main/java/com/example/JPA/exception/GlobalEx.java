package com.example.JPA.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class GlobalEx {

    @ExceptionHandler(value = Custom.class)
    public @ResponseBody CustomResponse handleCustomException(Custom e) {
        return new CustomResponse(400, e.getMessage(), null);
    }

    @ExceptionHandler
    public String handleException(Exception e) {
        return e.getMessage();
    }
}
