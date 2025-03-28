package com.example.JPA.dto;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseDTO {
    private Long id;
    private String name;
    private List<Long> departmentIds;

    public CourseDTO(Long id, String name) {
        this.id = id;
        this.name = name;
        this.departmentIds = List.of();
    }
}
