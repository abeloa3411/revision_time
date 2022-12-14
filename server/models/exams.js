import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
  title: String,
  code: String,
  rating: {
    type: Number,
    default: 0,
  },
  link: String,
});

const Exams = mongoose.model("Exams", ExamSchema);

export default Exams;
