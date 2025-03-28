package com.example.JPA.controller;

import com.example.JPA.dto.AssignmentDTO;
import com.example.JPA.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assignments")
public class AssignmentController {
    @Autowired
    private AssignmentService assignmentService;
    @GetMapping
    public List<AssignmentDTO> getAllAssignments() {
        return assignmentService.getAllAssignments();
    }
    @GetMapping("/{id}")
    public AssignmentDTO getAssignmentById(@RequestBody Long id) {
        return assignmentService.getAssignmentById(id);
    }
    @PostMapping
    public AssignmentDTO createAssignment(@RequestBody AssignmentDTO assignmentDTO) {
        return assignmentService.createAssignment(assignmentDTO);
    }

    @PutMapping("/{id}")
    public AssignmentDTO updateAssignment(@RequestBody Long id, AssignmentDTO assignmentDTO) {
        return assignmentService.updateAssignment(id, assignmentDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteAssignment(@RequestBody Long id) {
        assignmentService.deleteAssignment(id);
    }
}
