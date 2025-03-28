package com.example.JPA.service;

import com.example.JPA.dto.CourseDTO;
import com.example.JPA.dto.DepartmentDTO;

import java.util.List;

public interface DepartmentService {
    List<DepartmentDTO> getAllDepartments();
    DepartmentDTO getDepartmentById(Long id);
    DepartmentDTO createDepartment(DepartmentDTO departmentDTO);
    DepartmentDTO updateDepartment(Long id, DepartmentDTO departmentDTO);
    void deleteDepartment(Long id);
    DepartmentDTO addCoursesToDepartment(Long departmentId, List<Long> courseIds);
    public List<CourseDTO> getCoursesByDepartment(Long departmentId);

}
