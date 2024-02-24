// ************   Without authentication   **************
// import express from "express";
// const app = express();
// const port = process.env.PORT || "3000";
// // import mongoose from "mongoose";
// import connectToDatabase from "./config/config.js";
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/school";

// // Database configuration
// connectToDatabase(MONGODB_URI);

// app.listen(port, () => {
//   console.log(`sever listeners listening on port http://localhost:${port}`);
// });

// ****************   authentication   *****************
import express from "express";
const app = express();
// const port = process.env.PORT || "3000";
const port = process.env.PORT;
import connectToDatabase from "./config/config.js";
import dotenv from "dotenv"
dotenv.config();
import creatDoc from "./models/student.js";
// import creatMultipleDoc from "./models/student.js";
// import getAll from "./models/student.js";
// import updateDoc from "./models/student.js";

// import deleteDoc from "./models/student.js";
const MONGODB_URI = process.env.MONGODB_URI;

// ***********  Database configuration
connectToDatabase(MONGODB_URI);

// *********** create & saved documents
creatDoc();

// *********** Retrieve all data
// getAll();
// updateDoc('65cce0fb7c19acb3b2270e36');
// deleteDoc('65cce0fb7c19acb3b2270e36');
// creatDoc('khan', 38, 'mail');

// *********** create & saved Multiple documents
// creatMultipleDoc();

app.listen(port, () => {
  console.log(`sever listeners listening on port http://localhost:${port}`);
});
