import { Query } from 'mongoose';
import { Employee } from '../../models/Employee';

export const employeeResolver = {
  Query: {
    employees: async () => await Employee.find(),
  },
  Mutation: {
    createEmployee: async (
      _: any,
      { name, title, email }: { name: String; title: String; email: String }
    ) => {
      const newEmployee = new Employee({ name, title, email });
      return await newEmployee.save();
    },
  },
};
