package com.example.JPA.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor

@Data
public class AssignmentDTO {
    private Long id;
    private String name;
    private Long studentId;
}