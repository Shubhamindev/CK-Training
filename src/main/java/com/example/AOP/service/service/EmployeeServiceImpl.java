package com.example.AOP.service.service;

import com.example.AOP.dto.EmployeeDTO;
import com.example.AOP.model.Employee;
import com.example.AOP.repository.EmployeeRepository;
import com.example.AOP.service.EmployeeService;
import com.example.AOP.utils.EmployeeEntityDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeEntityDto.mapEmployeeDTOToEntity(employeeDTO);
        return EmployeeEntityDto.mapEmployeeEntityToDTO(employeeRepository.save(employee));
    }

    @Override
    public EmployeeDTO getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .map(EmployeeEntityDto::mapEmployeeEntityToDTO)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        return employeeRepository.findAll()
                .stream()
                .map(EmployeeEntityDto::mapEmployeeEntityToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long id, EmployeeDTO employeeDTO) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        employee.setName(employeeDTO.getName());
        employee.setDepartment(employeeDTO.getDepartment());
        employee.setSalary(employeeDTO.getSalary());

        return EmployeeEntityDto.mapEmployeeEntityToDTO(employeeRepository.save(employee));
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
