import mongoose from "mongoose";
import config from "../src/config/config";
export async function runMongo() {
  try {
    await mongoose.connect('mongodb://0.0.0.0/predict');
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.log(error);
  }
}