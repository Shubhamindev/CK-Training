package com.example.JPA.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DepartmentDTO {
    private Long id;
    private String name;
    private List<Long> courseIds;
}
