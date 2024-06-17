import express from "express";

import {
  getAllStudent,
  getOneStudent,
  searchStudents,
  signUp,
} from "../controllers/student.controller.js";
import { login } from "../controllers/student.controller.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.get("/getAllStudent", getAllStudent);
router.get("/getOneStudent/page/:id", getOneStudent);
router.post("/searchStudents", searchStudents);

export default router;
