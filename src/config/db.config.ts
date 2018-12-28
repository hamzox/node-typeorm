import "reflect-metadata";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { EmployeeEntity } from "../entities/employee";

export let dbOptions: PostgresConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "hamzakhan",
    password: "click123",
    database: "node-typeorm-test",
    synchronize: true,
    logging: false,
    entities: [EmployeeEntity]
}
