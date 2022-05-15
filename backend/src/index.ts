import "reflect-metadata";
import { createConnection } from "typeorm";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";

// import RedisStore from 'connect-redis';
const session = require("express-session");
let RedisStore = require("connect-redis")(session);
const { createClient } = require("redis");
let redisClient = createClient({ legacyMode: true });
redisClient.connect().catch(console.error);
import cors from "cors";
// import redis from "redis";
// import { createClient } from "redis";
// import session from "express-session";
// import connectRedis from 'connect-redis'; // From https://stackoverflow.com/questions/53201058/connect-redis-setup-in-typescript/53201135
import {graphqlUploadExpress} from 'graphql-upload';
import { FileUploadResolver } from "./resolvers/fileUpload";

// video at 2:20:25

const main = async () => {
  // TODO: switch to non deprecated createConnection
  const conn = await createConnection({
    type: "postgres",
    database: "marinecreatures",
    username: "postgres",
    password: "postgres",
    logging: !__prod__,
    synchronize: true, // TODO: remove in production and do migrations if needed instead
    entities: [Post, User],
  });

  const app = express();

  // REDIS MIDDLEWARE

  // const RedisStore = connectRedis(session); // From above
  // // const redisClient = redis.createClient();
  app.use(
    cors({ // Put cors on all routes
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true, // Keeps session alive forever. Note: TODO might be able to use this to delete uploads after a while?
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf security
        secure: __prod__, // Cookie only works in https
      },
      secret: "lskadfnlksagnelnwestkglnl", // TODO: change to env variable for production
      resave: false,
      saveUninitialized: false,
    })
  );

  // APOLLO MIDDLEWARE
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver, FileUploadResolver],
      validate: false,
    }),
    context: ({ req, res }: MyContext): MyContext => ({
      manager: conn.manager,
      req,
      res,
    }), // Note: should be disabling uploads but it doesnt work TODO
  });

  // Middleware to enable file uploads
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main();
