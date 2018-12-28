
import { getManager } from "typeorm";
import { EmployeeEntity } from "../entities/employee";

export class EmployeeRepository {

    getAllEmployees() {
        return getManager().getRepository(EmployeeEntity).find(); // get Employee repository and find all employees
    }

    saveEmployee(id: number, employee: EmployeeEntity) {
        return getManager().getRepository(EmployeeEntity).save(employee);
    }

}