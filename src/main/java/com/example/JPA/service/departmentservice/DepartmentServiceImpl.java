package com.example.JPA.service.departmentservice;

import com.example.JPA.dto.CourseDTO;
import com.example.JPA.dto.DepartmentDTO;
import com.example.JPA.exception.Custom;
import com.example.JPA.model.Course;
import com.example.JPA.model.Department;
import com.example.JPA.repository.CourseRepository;
import com.example.JPA.repository.DepartmentRepository;
import com.example.JPA.service.DepartmentService;
import com.example.JPA.utils.DepartmentMapping;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;
    private final CourseRepository courseRepository;

    @Override
    public DepartmentDTO createDepartment(DepartmentDTO departmentDTO) {
        Department department = new Department();
        department.setName(departmentDTO.getName());
        department.setCourses(List.of());
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapping.mapDepartmentEntityToDTO(savedDepartment);
    }

    @Override
    public DepartmentDTO addCoursesToDepartment(Long departmentId, List<Long> courseIds) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new RuntimeException("Department not found"));
        List<Course> courses = courseRepository.findAllById(courseIds);
        if (courses.isEmpty()) {
            throw new Custom("No courses found with the given IDs " + courseIds);
        }
        courses.forEach(course -> {
            if (!department.getCourses().contains(course)) {
                department.getCourses().add(course);
                course.getDepartments().add(department);
            }
        });
        departmentRepository.save(department);
        return DepartmentMapping.mapDepartmentEntityToDTO(department);
    }

    @Override
    public List<DepartmentDTO> getAllDepartments() {
        return departmentRepository.findAll().stream()
                .map(DepartmentMapping::mapDepartmentEntityToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public DepartmentDTO getDepartmentById(Long id) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Department with ID " + id + " not found"));
        return DepartmentMapping.mapDepartmentEntityToDTO(department);
    }

    @Override
    public DepartmentDTO updateDepartment(Long id, DepartmentDTO departmentDTO) {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Department with ID " + id + " not found"));

        department.setName(departmentDTO.getName());
        Department updatedDepartment = departmentRepository.save(department);
        return DepartmentMapping.mapDepartmentEntityToDTO(updatedDepartment);
    }

    @Override
    public List<CourseDTO> getCoursesByDepartment(Long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new RuntimeException("Department not found"));

        return department.getCourses().stream()
                .map(course -> new CourseDTO(course.getId(), course.getName(),
                        course.getDepartments().stream().map(Department::getId).collect(Collectors.toList())))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteDepartment(Long id) {
        Optional<Department> departmentOptional = departmentRepository.findById(id);
        if (departmentOptional.isEmpty()) {
            throw new RuntimeException("Department with ID " + id + " not found");
        }
        departmentRepository.delete(departmentOptional.get());
    }
}