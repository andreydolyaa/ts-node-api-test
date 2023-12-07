import { Schema, model } from "mongoose";

interface IEmployee {}

const employeeSchema = new Schema<IEmployee>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      default: function (this: any) {
        return this._id;
      },
      index: true,
    },
  },
  { versionKey: false }
);

export const Employee = model<IEmployee>("Employee", employeeSchema);
