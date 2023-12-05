
import mongoose from "mongoose";






 export const config = async () => {
  try {
    const url = process.env.databse;
    const conn = await mongoose.connect(url, {
 
   
    });
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`error: ${error.message}`)
  }
};

