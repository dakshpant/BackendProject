import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";

dotenv.config({ path: "./.env" });

const app = express();

await connectDB()

app.listen(process.env.PORT, ()=>{
    console.log(`Listening On port ${process.env.PORT}`);
    
})


// Approach One
/*
import express from "express";

const app = express()

// a semicolon before the below iffe is because in large code sometimes coder forgots to add semicolon after the code block which might cause an error in the code.
// Good Practice
(async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${DB_Name}`);
    app.on("error", ()=>{
        console.log(`Error: ${error.message}`);
        throw error;
    })
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`Error occured: ${error}`);
  }
})();
*/