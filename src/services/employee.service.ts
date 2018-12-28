import { EmployeeRepository } from "../repository/employee.repository";
import { EmployeeDto } from "../dtos/employee.dto";
import { EmployeeEntity } from "../entities/employee";
import { Response, Request } from "express";

const employeeRepository = new EmployeeRepository();

export class EmployeeService {
    saveEmployee(req: Request, callback: Function) {
        let employee: EmployeeEntity = new EmployeeDto(req.body);
        let id = req.params.employee_id;
        if (id) {
            employeeRepository.saveEmployee(id, employee).then(
                (data) => {
                    callback(data)
                },
                (err) => console.log(err) 
            );
        }
    }
}