import express from "express";
import { addUser, getUsers } from "../Controller/userController.js";

const Route = express.Router();

Route.post("/add", addUser);
Route.get("/users", getUsers);

export default Route;
