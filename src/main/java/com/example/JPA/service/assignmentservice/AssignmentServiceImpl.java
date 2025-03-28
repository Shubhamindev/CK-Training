package com.example.JPA.service.assignmentservice;

import com.example.JPA.dto.AssignmentDTO;
import com.example.JPA.model.Assignment;
import com.example.JPA.repository.AssignmentRepository;
import com.example.JPA.service.AssignmentService;
import com.example.JPA.utils.AssignmentMapping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AssignmentServiceImpl implements AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Override
    public List<AssignmentDTO> getAllAssignments() {
        return assignmentRepository.findAll().stream()
                .map(AssignmentMapping::mapAssignmentEntityToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public AssignmentDTO getAssignmentById(Long id) {
        return assignmentRepository.findById(id)
                .map(AssignmentMapping::mapAssignmentEntityToDTO)
                .orElseThrow(() -> new RuntimeException("Assignment not found"));
    }

    @Override
    public AssignmentDTO createAssignment(AssignmentDTO assignmentDTO) {
        Assignment assignment = AssignmentMapping.mapAssignmentDTOToEntity(assignmentDTO);
        assignmentRepository.save(assignment);
        return AssignmentMapping.mapAssignmentEntityToDTO(assignment);
    }

    @Override
    public AssignmentDTO updateAssignment(Long id, AssignmentDTO assignmentDTO) {
        Assignment assignment = assignmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Assignment not found"));
        assignment.setName(assignmentDTO.getName());
        assignmentRepository.save(assignment);
        return AssignmentMapping.mapAssignmentEntityToDTO(assignment);
    }

    @Override
    public void deleteAssignment(Long id) {
        assignmentRepository.deleteById(id);
    }
}
