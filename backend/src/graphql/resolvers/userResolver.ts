import { Query } from 'mongoose';
import { User } from '../../models/User';

export const userResolver = {
  Query: {
    users: async () => await User.find(),
  },
  Mutation: {
    createUser: async (
      _: any,
      { name, email }: { name: string; email: string }
    ) => {
      const newUser = new User({ name, email });
      return await newUser.save();
    },
  },
};
