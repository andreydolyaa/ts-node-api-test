import express, { Router } from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
} from "../controllers/employeeController";

const router: Router = express.Router();

router
  .route("/employee")
  .get(getEmployees)
  .post(addEmployee)
  .delete(deleteEmployee);

export default router;
