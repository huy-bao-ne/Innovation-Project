importScripts("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");

self.onmessage = function (e) {
    const { studentName, date, score, missingKeywords, teacherComment } = e.data;
    const { jsPDF } = self.jspdf;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Essay Grading Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Student Name: ${studentName}`, 20, 30);
    doc.text(`Date: ${date}`, 20, 40);
    doc.text(`Score: ${score}/100`, 20, 50);
    doc.text("Missing Keywords:", 20, 60);
    doc.text(missingKeywords.join(", ") || "None", 30, 70);
    doc.text("Teacher's Comment:", 20, 80);
    doc.text(teacherComment || "No comment", 30, 90);

    const pdfBlob = doc.output("blob");
    self.postMessage(pdfBlob);
};
