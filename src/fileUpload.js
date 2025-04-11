import { PDFDocument } from "pdf-lib";
import mammoth from "mammoth";

// Đọc nội dung file
export const readFileContent = async (file) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
        reader.onload = async (event) => {
            const arrayBuffer = event.target.result;
            if (file.name.endsWith(".pdf")) {
                const pdfDoc = await PDFDocument.load(arrayBuffer);
                const text = (await pdfDoc.getPages()[0].getTextContent()).items.map(item => item.str).join(" ");
                resolve(text);
            } else if (file.name.endsWith(".docx")) {
                const result = await mammoth.extractRawText({ arrayBuffer });
                resolve(result.value);
            } else {
                resolve("");
            }
        };
        reader.readAsArrayBuffer(file);
    });
};
