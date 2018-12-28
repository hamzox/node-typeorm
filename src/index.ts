import * as express from 'express';
import * as bodyParser from "body-parser";
import "reflect-metadata";
import { createConnection } from 'typeorm';
import { dbOptions } from './config/db.config';
import EmployeeRouter from './routes/employee.route';

/**
 * Create Express server.
 */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

/**
 * APIs
 */
app.use("/api", EmployeeRouter);

(async () => {
    const conn = await createConnection(dbOptions);
    console.log("***** DB CONNECTION CREATED *****");
    
})();



module.exports = app;