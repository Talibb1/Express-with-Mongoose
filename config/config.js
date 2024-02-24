import mongoose from "mongoose";

const connectToDatabase = async (MONGODB_URI) => {
  try {

    const MONGODB_OPTIONS = {
      dbname: process.env.PORT,
    }
    await mongoose.connect(MONGODB_URI, MONGODB_OPTIONS);
    console.log("connect to database successfully");
  } catch (error) {
    console.log(error);
  }
};
export default connectToDatabase;


// auqazi@skillgigs.com

// Dum83333