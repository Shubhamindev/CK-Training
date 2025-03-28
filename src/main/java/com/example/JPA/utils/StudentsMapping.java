package com.example.JPA.utils;

import com.example.JPA.dto.StudentDTO;
import com.example.JPA.model.Student;
import lombok.Builder;

@Builder
public class StudentsMapping {

    public static StudentDTO mapStudentEntityToDTO(Student student) {
        return StudentDTO.builder()
                .id(student.getId())
                .name(student.getName())
                .departmentId(student.getDepartment() != null ? student.getDepartment().getId() : null)
                .assignmentId(student.getAssignment()!= null ? student.getAssignment().getId() : null)
                .build();
    }

    public static Student mapStudentDTOToEntity(StudentDTO studentDTO) {
        Student student = new Student();
        student.setId(studentDTO.getId());
        student.setName(studentDTO.getName());
        return student;
    }
}
