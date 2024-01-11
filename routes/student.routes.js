import express from 'express';

import {getAllStudent, getOneStudent, signUp} from "../controllers/student.controller.js"
import {login  } from "../controllers/student.controller.js"


const router= express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.get("/getAllStudent", getAllStudent);
router.post("/getOneStudent", getOneStudent);
export default router;