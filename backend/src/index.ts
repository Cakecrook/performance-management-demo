import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { typeDefs } from './graphql/schemas/typeDefs';
import { resolvers } from './graphql/resolvers';

dotenv.config({ path: 'config.env' });

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

async function startServer() {
  try {
    const app = express();

    await mongoose.connect(MONGO_URI);
    console.log('Connected to Database');

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: PORT }, () =>
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  } catch (err) {
    console.error(`Failed to start server`, err);
  }
}

startServer();
