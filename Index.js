import express from "express";
import dbConnection from "./Database/Db.js";
import Route from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Route);
let db = dbConnection();
console.log(db);
const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
