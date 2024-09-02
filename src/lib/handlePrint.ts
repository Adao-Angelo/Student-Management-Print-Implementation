import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const handlePrint = () => {
  const input = document.querySelector("table") as HTMLElement;
  if (!input) return;

  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("students.pdf");
    })
    .catch((error) => {
      console.error("Error generating PDF:", error);
    });
};
