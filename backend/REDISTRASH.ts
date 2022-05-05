import express from 'express';
const session = require("express-session")
let RedisStore = require("connect-redis")(session)

// redis@v4
const { createClient } = require("redis")
let redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

const app = express();

app.use(
  session({
    store: new RedisStore({
        client: redisClient,
        disableTouch: true, // Keeps session alive forever. Note: TODO might be able to use this to delete uploads after a while?
    }),
    saveUninitialized: false,
    secret: "keyboard cat",
    resave: false,
  })
)