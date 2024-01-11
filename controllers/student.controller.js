import Student from "../models/Student.js";
const TOKEN = "voihjiogoi";
import jwt from "jsonwebtoken";

//ici je cree les fonctions qui seront ensuite des pages au front end
export const signUp = async (req, res, next) => {
  console.log("----------> req.body is ", req.body);

  try {
    const { firstname, lastname, username, id, password } = req.body;

    if (!firstname || !lastname || !username || !id || !password) {
      return res.status(400).json({
        message: "Missing required fields in the request body.",
      });
    }
    const newUser = new Student({
      firstname,
      lastname,
      username,
      id,
      password,
    });
    console.log(newUser);
    newUser.save();
    res.status(200).json("User created successfully!");
  } catch (error) {
    res.status(200).json({
      message: "Something went wrong!",
      err: error,
    });
    console.log(" this is the error", error);
  }
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const student = await Student.findOne({ username }).exec();

    if (!student || student.password !== password) {
      return res.status(401).json({ error: "Wrong username/password" });
    }

    const token = jwt.sign(
      {
        username: student.username,
        id: student.id,
      },
      TOKEN,
      {
        expiresIn: "2h",
      },
    );

    return res
      .status(200)
      .json({
        message: "Login successfully",
        token: token,
        username,
        id: student.id,
      });
  } catch (e) {
    console.log(e);

    res.status(500).send("Internal Server Error");
  }
};

export const getOneStudent = async (req, res, next) => {
  console.log("the student id is ", req.body.id);

  try {
    const studentToFind = await Student.findOne({
      username: req.body.username,
    });
    res.status(200).json(studentToFind);
  } catch (error) {
    console.log("the error is ", error);
    restart.status(500).send("Student not found");
  }
};
export const getAllStudent = async (req, res, next) => {
  try {
    const allStudent = await Student.find();
    res.status(200).json(allStudent);
  } catch (error) {
    res.status(500).send("Error!");
  }
};
