import express from "express";
import dbConnection from "./database/DataBase.js";
import Route from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Route);
let db = dbConnection();
console.log(db);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
