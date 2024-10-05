let users = [];

const resolvers = {
  Query: {
    getUsers: () => users,
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = { id: users.length + 1, name, email };
      users.push(newUser);
      return newUser;
    },
  },
};

export default resolvers;
