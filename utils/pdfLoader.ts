import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export async function loadPDF(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/pdf"
        }
    });
    if (!response.ok) throw new Error("Failed to fetch PDF from S3 URL.");

    const pdfBlob = await response.blob();

    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async () => {
        try {
          const pdfData = new Uint8Array(reader.result as ArrayBuffer);

          const pdf = await getDocument({ data: pdfData }).promise;

          let extractedText = "";
          for (let i = 1; i <= Math.min(pdf.numPages, 10); i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            extractedText += textContent.items.map((item) => (item as any).str).join(" ") + " ";
          }
          resolve(extractedText.substring(0));
        } catch (error) {
          console.log("Error reading PDF.", error);
        }
      };

      reader.onerror = () => reject("Error reading PDF file.");
      reader.readAsArrayBuffer(pdfBlob);
    });
  } catch (error) {
    console.error("Error loading PDF:", error);
    throw new Error("Error loading PDF.");
  }
};
