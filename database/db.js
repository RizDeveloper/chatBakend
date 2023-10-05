import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const dbConnection = async () => {
  const url = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.hikuasa.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(url, { useUnifiedTopology: true });
    console.log("connected");
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default dbConnection;
