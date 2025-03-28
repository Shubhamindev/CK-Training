package com.example.JPA.service.studentservice;

import com.example.JPA.dto.StudentDTO;
import com.example.JPA.model.Assignment;
import com.example.JPA.model.Department;
import com.example.JPA.model.Student;
import com.example.JPA.repository.AssignmentRepository;
import com.example.JPA.repository.DepartmentRepository;
import com.example.JPA.repository.StudentRepository;
import com.example.JPA.service.StudentService;
import com.example.JPA.utils.StudentsMapping;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final DepartmentRepository departmentRepository;
    private final AssignmentRepository assignmentRepository;
    public StudentServiceImpl(StudentRepository studentRepository, DepartmentRepository departmentRepository, AssignmentRepository assignmentRepository) {
        this.studentRepository = studentRepository;
        this.departmentRepository = departmentRepository;
        this.assignmentRepository = assignmentRepository;
    }

    @Override
    public StudentDTO createStudent(StudentDTO studentDTO) {
        Student student = StudentsMapping.mapStudentDTOToEntity(studentDTO);
        if (studentDTO.getDepartmentId() != null) {
            student.setDepartment(getDepartmentById(studentDTO.getDepartmentId()));
        }
        if (studentDTO.getAssignmentId() != null) {
            Assignment assignment = getAssignmentById(studentDTO.getAssignmentId());
            student.setAssignment(assignment);
            assignment.setStudent(student);
        }
        return StudentsMapping.mapStudentEntityToDTO(studentRepository.save(student));
    }

    @Override
    public List<StudentDTO> getAllStudents() {
        return studentRepository.findAll()
                .stream()
                .map(StudentsMapping::mapStudentEntityToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public StudentDTO getStudentById(Long id) {
        return studentRepository.findById(id)
                .map(StudentsMapping::mapStudentEntityToDTO)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + id));
    }

    @Override
    public StudentDTO updateStudent(Long id, StudentDTO studentDTO) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + id));
        student.setName(studentDTO.getName());
        if (studentDTO.getDepartmentId() != null) {
            student.setDepartment(getDepartmentById(studentDTO.getDepartmentId()));
        }
        return StudentsMapping.mapStudentEntityToDTO(studentRepository.save(student));
    }

    @Override
    public void deleteStudent(Long id) {
        if (!studentRepository.existsById(id)) {
            throw new RuntimeException("Student not found with ID: " + id);
        }
        studentRepository.deleteById(id);
    }

    private Department getDepartmentById(Long departmentId) {
        return departmentRepository.findById(departmentId)
                .orElseThrow(() -> new RuntimeException("Department not found with ID: " + departmentId));
    }
    private Assignment getAssignmentById(Long assignmentId) {
        return assignmentRepository.findById(assignmentId)
                .orElseThrow(() -> new RuntimeException("Assignment not found with ID: " + assignmentId));
    }
}
