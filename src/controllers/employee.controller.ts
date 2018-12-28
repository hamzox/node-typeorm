import { Response, Request } from "express";
import { EmployeeService } from "../services/employee.service";

const employeeService = new EmployeeService();

export const SaveEmployee = (req: Request, res: Response) => {
    employeeService.saveEmployee(req, (data: any) => {
        console.log("Employee Saved");
        res.send(data)
    })
}
