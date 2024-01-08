
import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from "./routes/admin.routes.js";
import bookRoutes from "./routes/book.routes.js";
import dotenv from'dotenv'
import studentRoutes from "./routes/student.routes.js";
import mongoose from "mongoose";

dotenv.config()
const app= express();
app.use(express.json());
mongoose.set("strictQuery", true);
const url=process.env.MONGODB_Url
// Use MONGODB_URL in your code as needed
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("database connected!"))
.catch(error => console.error("Error connecting to database:", error));
app.use(bodyParser.urlencoded({ extended: false })); // determine type of data we gonna body parse
app.use(bodyParser.json());
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