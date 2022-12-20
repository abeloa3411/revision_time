import pdfDoc from "pdfkit";

const generatePDF = (dataCallback, endCallback) => {
  const doc = new pdfDoc();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  doc.fontSize(25).text("Download exams here");
  doc.end();
};

export default generatePDF;
