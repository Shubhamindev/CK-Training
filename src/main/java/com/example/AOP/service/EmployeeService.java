package com.example.AOP.service;
import com.example.AOP.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {
    public EmployeeDTO createEmployee(EmployeeDTO employee);
    public EmployeeDTO getEmployeeById(Long id);

    List<EmployeeDTO> getAllEmployees();

    EmployeeDTO updateEmployee(Long id, EmployeeDTO employeeDTO);

    void deleteEmployee(Long id);
}