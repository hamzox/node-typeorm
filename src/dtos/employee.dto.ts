import { EmployeeEntity } from "../entities/employee";

export class EmployeeDto extends EmployeeEntity {
    constructor (request: any) {
        super();
        if (request) {
            this.employee_email = request.employee_email;
            this.employee_name = request.employee_name;
            this.employee_id = request.employee_id;
        }
    }
}