import express from 'express';

import { addBook, deleteBook, getAllBook, getOneBook } from "../controllers/books.controller.js";


const router= express.Router();

router.post("/addBook", addBook);
router.post("/getOneBook", getOneBook);
router.get("/getAllBook", getAllBook);
router.post("/deleteBook", deleteBook);
export default router;