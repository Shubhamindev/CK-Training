package com.example.JPA.utils;

import com.example.JPA.dto.CourseDTO;
import com.example.JPA.model.Course;
import com.example.JPA.model.Department;

import java.util.stream.Collectors;

public class CourseMapping {

    public static CourseDTO mapCourseEntityToDTO(Course course) {
        return new CourseDTO(
                course.getId(),
                course.getName(),
                course.getDepartments() != null
                        ? course.getDepartments().stream()
                        .map(Department::getId)
                        .collect(Collectors.toList())
                        : null
        );
    }
//    public static Course mapCourseDTOToEntity(CourseDTO courseDTO, DepartmentRepository departmentRepository) {
//        Course course = new Course();
//        course.setId(courseDTO.getId());
//        course.setName(courseDTO.getName());
//        if (courseDTO.getDepartmentIds() != null) {
//            course.setDepartments(courseDTO.getDepartmentIds()
//                    .stream()
//                    .map(id -> departmentRepository.findById(id)
//                            .orElseThrow(() -> new RuntimeException("Department with ID " + id + " not found")))
//                    .collect(Collectors.toList())
//            );
//        } else {
//            course.setDepartments(List.of());
//        }
//        return course;
//    }
}
