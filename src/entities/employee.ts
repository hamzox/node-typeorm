import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/*
 * @Class: Employee
 * @Description: Employee Entity model.
 */

@Entity('employee')
export class EmployeeEntity {

    @PrimaryGeneratedColumn()
    employee_id: number;

    @Column()
    employee_name: string;

    @Column({ unique: true })
    employee_email: string;

}