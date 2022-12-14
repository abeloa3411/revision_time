import express from "express";
import exams from "./routes/exams.js";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/student-wallet/build")));

app.use("/api/exams", exams);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
