package com.example.JPA.utils;

import com.example.JPA.dto.AssignmentDTO;
import com.example.JPA.model.Assignment;

public class AssignmentMapping {
    public static AssignmentDTO mapAssignmentEntityToDTO(Assignment assignment) {
        AssignmentDTO assignmentDTO = new AssignmentDTO();
        assignmentDTO.setId(assignment.getId());
        assignmentDTO.setName(assignment.getName());
        assignmentDTO.setStudentId(assignment.getStudent().getId());
        return assignmentDTO;
    }
    public static Assignment mapAssignmentDTOToEntity(AssignmentDTO assignmentDTO) {
        Assignment assignment = new Assignment();
        assignment.setId(assignmentDTO.getId());
        assignment.setName(assignmentDTO.getName());
        return assignment;
    }
}
