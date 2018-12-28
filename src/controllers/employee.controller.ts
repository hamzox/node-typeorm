import { Response, Request } from "express";
import { EmployeeService } from "../services/employee.service";

const employeeService = new EmployeeService();

export class EmployeeController {
    SaveEmployee = (req: Request, callback: Function) => {
        employeeService.saveEmployee(req, (data: any) => {
            callback(data);
        })
    }    
}