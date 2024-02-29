import express from "express";
import config from "./config/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import routerLeague from "./routes/predict.routes";
import routerSession from './routes/session.routes'
import groupLeague from './routes/group.routes'
import { runMongo } from "../database/mongo";
import setUpEnviroment from "../database/awsdynamo";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

setUpEnviroment()
runMongo();
const corsOptions = {
  origin: "http://localhost:3000", // Reemplaza esto con el origen de tu frontend
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/Leagues", routerLeague);
app.use("/group", groupLeague);
app.use('/auth', routerSession);

app.listen(config.BACK_PORT, () => {
  console.log(`Server running in port: ${config.BACK_PORT}`);
});
