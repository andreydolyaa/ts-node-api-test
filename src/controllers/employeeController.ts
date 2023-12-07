import { Employee } from "../models/employeeModel";
import { Controller } from "../types/types";

export const getEmployees: Controller = async (req, res, next) => {
  try {
    const data = await Employee.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const addEmployee: Controller = async (req, res, next) => {
  try {
    const employee = await Employee.create({ ...req.body });
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteEmployee: Controller = async (req, res, next) => {
  try {
    const employee = await Employee.findOneAndDelete({ id: req.params.id });
    res.status(200).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};
