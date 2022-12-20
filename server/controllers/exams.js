import client from "../db/exams.js";
import Exam from "../models/exams.js";
import generatePDF from "../service/pdf-service.js";

export const getExams = (req, res) => {
  const stream = res.writeHead(200, {
    "Content-Type": "Application/pdf",
    "Content-Disposition": "attachment;filename=exam.pdf",
  });

  generatePDF(
    (chunk) => stream.write(chunk),
    () => stream.end()
  );

  // try {
  //   const exams = await Exam.find();
  //   res.status(200).json(exams);
  // } catch (error) {
  //   res.status(200).json({ error: error.message });
  // }
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
