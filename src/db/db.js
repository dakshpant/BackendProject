import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${DB_Name}`
    );
    console.log(`Mongo DB Connected!! DB Host ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error(`DB Connection Errror:${error}`);
    process.exit(1);
  }
};
export default connectDB