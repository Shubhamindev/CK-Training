package com.example.JPA.service.courseservice;

import com.example.JPA.dto.CourseDTO;
import com.example.JPA.model.Course;
import com.example.JPA.repository.CourseRepository;
import com.example.JPA.repository.DepartmentRepository;
import com.example.JPA.service.CourseService;
import com.example.JPA.utils.CourseMapping;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@RequiredArgsConstructor
@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private DepartmentRepository departmentRepository;

//    public CourseDTO addDepartmentToCourse(Long courseId, Long departmentId) {
//        Course course = courseRepository.findById(courseId)
//                .orElseThrow(() -> new RuntimeException("Course not found"));
//        Department department = departmentRepository.findById(departmentId)
//                .orElseThrow(() -> new RuntimeException("Department not found"));
//
//        course.getDepartments().add(department);
//        courseRepository.save(course);
//
//        return CourseMapping.mapCourseEntityToDTO(course);
//    }

    @Override
    public List<CourseDTO> getAllCourses() {
        return courseRepository.findAll().stream()
                .map(CourseMapping::mapCourseEntityToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CourseDTO getCourseById(Long id) {
        return courseRepository.findById(id)
                .map(CourseMapping::mapCourseEntityToDTO) // ✅ Use mapping utility
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }

    @Override
    public CourseDTO createCourse(CourseDTO courseDTO) {
        Course course = new Course();
        course.setName(courseDTO.getName());
        course = courseRepository.save(course);
        return new CourseDTO    (course.getId(), course.getName());
    }

    @Override
    public CourseDTO updateCourse(Long id, CourseDTO courseDTO) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        course.setName(courseDTO.getName());
        courseRepository.save(course);
        return CourseMapping.mapCourseEntityToDTO(course);
    }

    @Override
    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}
