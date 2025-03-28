package com.example.JPA.dto;

import lombok.Builder;
import lombok.Data;
@Builder
@Data
public class StudentDTO {
    private Long id;
    private String name;
    private Long departmentId;
    private Long assignmentId;
}
