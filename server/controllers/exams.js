import client from "../db/exams.js";
import Exam from "../models/exams.js";

export const getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

export const emailSubmit = async (req, res) => {
  const { email } = req.body;
  try {
    const clientEmail = new client(email);

    await clientEmail.save();
    res.status(200).json(clientEmail);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};
