import express from 'express';

import {issueBookToStudent, signUp} from "../controllers/admin.controller.js"
import {login  } from "../controllers/student.controller.js"


const router= express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/issueBook",issueBookToStudent)
export default router;