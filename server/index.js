import express from "express";
import exams from "./routes/exams.js"

const app = express();

app.use(express.json());

app.use("/api/exams",exams)

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
