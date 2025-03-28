package com.example.JPA.service;

import com.example.JPA.dto.AssignmentDTO;
import java.util.List;


public interface AssignmentService {
    List<AssignmentDTO> getAllAssignments();

    AssignmentDTO getAssignmentById(Long id);

    AssignmentDTO createAssignment(AssignmentDTO assignmentDTO);

    AssignmentDTO updateAssignment(Long id, AssignmentDTO assignmentDTO);

    void deleteAssignment(Long id);
}
