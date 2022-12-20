import express from "express";
import exams from "./routes/exams.js";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/student-wallet/build")));

app.use("/api/exams", exams);

export default app;
