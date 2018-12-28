import * as express from 'express';
import { ROUTE_CONST } from '../constants/route.constant';
import { EmployeeController } from '../controllers/employee.controller';

const EmployeeRouter = express.Router();
const employeeController = new EmployeeController();

EmployeeRouter.post(ROUTE_CONST.SAVE_EMPLOYEE, (request: express.Request, response: express.Response) => {
    employeeController.SaveEmployee(request, (data: any) => {
        response.send(data);
    })    
})

export default EmployeeRouter;