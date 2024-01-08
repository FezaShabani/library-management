import express from 'express';

import {signUp} from "../controllers/student.controller.js"
import {login  } from "../controllers/student.controller.js"


const router= express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
export default router;