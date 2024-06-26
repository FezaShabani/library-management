import student from "../models/Student.js";
import admin from "../models/admin.js";
import books from "../models/books.js";
import jwt from 'jsonwebtoken'
const TOKEN = "voihjiogoi";


export const signUp = async (req, res, next) => {
  try {
    const newUser = new admin({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      id: req.body.id,
      password: req.body.password,
    });
    await newUser.save();
    res.status(200).json("User created successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json("Oops! Something went wrong");
  }
};

export const issueBookToStudent = async (req, res, next) => {
  try {
    const { studentId, title } = req.body;
    
    // Find the student by id
    const studentToGetBook = await student.findOne({
      id: studentId,
    });

    if (!studentToGetBook) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }
    console.log("the student is ", studentToGetBook);

    // Find the book by title
    const bookToGive = await books.findOne({ title });
   const bookTitle=bookToGive.title
   const isbn=bookToGive.isbn

    console.log("the book to give  is ", bookToGive);

    if (!bookToGive) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    console.log("the  number of copies is ", bookToGive.numberOfCopies);
    // Check if the book has available copies
    if ((bookToGive.numberOfCopies = 0)) {
      return res.status(400).json({
        success: false,
        message: "No available copies of the book",
      });
    }

    // Add the book title to the student's book list
    studentToGetBook.books.push({
      isbn,
      takenAt: new Date(),
      title:bookTitle
    });

    // Update the number of copies for the book by decrementing by 1
    bookToGive.numberOfCopies -= 1;

    // Save the changes to both the student and the book
    await Promise.all([studentToGetBook.save(), bookToGive.save()]);

    return res.json({ success: true, message: "Book issued successfully" });
  } catch (error) {
    console.error("Error issuing book:", error);
    //   return { success: false, message: 'Error issuing book' };
  }
};

export const viewIssuedBook = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(200).json("Oops! Something went wrong");
  }
};

export const loginAdmin = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const newAdmin = await admin.findOne({ username }).exec();

    if (!newAdmin || newAdmin.password !== password) {
      return res.status(401).json({ error: "Wrong username/password" });
    }

    const token = jwt.sign(
      {
        username: newAdmin.username,
        id: newAdmin.id,
      },
      TOKEN,
      {
        expiresIn: "2h",
      },
    );

    return res.status(200).json({
      message: "Login successfully",
      token: token,
      username,
      id: newAdmin.id,
    });
  } catch (e) {
    console.log(e);

    res.status(500).send("Internal Server Error");
  }
};