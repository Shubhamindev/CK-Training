package com.example.JPA.controller;

import com.example.JPA.dto.CourseDTO;
import com.example.JPA.dto.DepartmentDTO;
import com.example.JPA.exception.CustomResponse;
import com.example.JPA.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/departments")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping
    public List<DepartmentDTO> getAllDepartments() {
        return departmentService.getAllDepartments();
    }

    @GetMapping("/{id}")
    public DepartmentDTO getDepartmentById(@PathVariable Long id) {
        return departmentService.getDepartmentById(id);
    }

    @PostMapping
    public ResponseEntity<DepartmentDTO> createDepartment(@RequestBody DepartmentDTO departmentDTO) {
        return ResponseEntity.ok(departmentService.createDepartment(departmentDTO));
    }

    @GetMapping("/{departmentId}/courses")
    public ResponseEntity<List<CourseDTO>> getCoursesByDepartment(@PathVariable Long departmentId) {
        return ResponseEntity.ok(departmentService.getCoursesByDepartment(departmentId));
    }

    @PostMapping("/{departmentId}/add-courses")
    public CustomResponse addCoursesToDepartment(
            @PathVariable Long departmentId,
            @RequestBody Map<String, List<Long>> request) {
        List<Long> courseIds = request.get("courseIds");
        return new CustomResponse(200, "Cour", departmentService.addCoursesToDepartment(departmentId, courseIds));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DepartmentDTO> updateDepartment(
            @PathVariable Long id,
            @RequestBody DepartmentDTO departmentDTO) {
        return ResponseEntity.ok(departmentService.updateDepartment(id, departmentDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable Long id) {
        departmentService.deleteDepartment(id);
        return ResponseEntity.noContent().build();
    }


}
