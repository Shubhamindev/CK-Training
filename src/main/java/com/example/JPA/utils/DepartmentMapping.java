package com.example.JPA.utils;

import com.example.JPA.dto.DepartmentDTO;
import com.example.JPA.model.Course;
import com.example.JPA.model.Department;
import org.springframework.util.CollectionUtils;

public class DepartmentMapping {

    public static DepartmentDTO mapDepartmentEntityToDTO(Department department) {
        return DepartmentDTO.builder()
                .id(department.getId())
                .name(department.getName())
                .courseIds(!CollectionUtils.isEmpty(department.getCourses())
                        ? department.getCourses().stream()
                        .map(Course::getId)
                        .toList()
                        : null)
                .build();
    }

//    public static Department mapDepartmentDTOToEntity(DepartmentDTO departmentDTO, List<Course> courses) {
//        Department department = new Department();
//        department.setId(departmentDTO.getId());
//        department.setName(departmentDTO.getName());
//        department.setCourses(courses);
//        return department;
//    }
}
