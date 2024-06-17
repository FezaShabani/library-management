import express from "express";

import {
  addBook,
  deleteBook,
  getAllBook,
  getOneBook,
  searchBooks,
} from "../controllers/books.controller.js";

const router = express.Router();

router.post("/addBook", addBook);
router.post("/getOneBook", getOneBook);
router.get("/getAllBook", getAllBook);
router.delete("/deleteBook/:id", deleteBook);
router.post("/searchBooks", searchBooks);

export default router;
