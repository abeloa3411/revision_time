import express from "express";
import { getExams } from "../controllers/exams.js";

const router = express.Router();

router.route("/").get(getExams);

export default router
