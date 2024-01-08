
import dotenv from 'dotenv';
import express from 'express';
import adminRoutes from "./routes/admin.routes.js";
import bookRoutes from "./routes/book.routes.js";
import studentRoutes from "./routes/student.routes.js";
import mongoose from "mongoose";

dotenv.config()

const app= express();


mongoose
.connect(process.env.MONGODB_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected!"));

app.use(express.urlencoded({ extended: false })); // determine type of data we gonna body parse
app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    // intercepts OPTIONS method
    if ("OPTIONS" === req.method) {
      // respond with 200
      res.sendStatus(200);
    } else {
      // move on
      next();
    }
  });

//   app.use(controlCors);
  app.use("/admin", adminRoutes);
  app.use("/student", studentRoutes);
  app.use("/book", bookRoutes);

//   module.exports = app;
  app.listen(8800, () => {
    console.log("Backend connected at port 8800");
  })