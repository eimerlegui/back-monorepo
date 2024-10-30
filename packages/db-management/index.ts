
import e, { Application } from "express";
import { configSequelize } from "./config/sequelize";
import { configApp } from "./config/app";
import http from "http";

const app: Application = e();
const server = http.createServer(app);

configSequelize();
configApp(app)

const eimer = { saludo: "hello world" }

export { server, eimer };