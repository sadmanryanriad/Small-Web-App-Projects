/* eslint-disable react/prop-types */
import html2canvas from 'html2canvas-pro';
import { jsPDF } from "jspdf";

const GeneratePdfWithProperPadding = ({ rootElementId, downloadFileName }) => {
  const downloadPdfDocument = async () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input, {
      scale: 2, // Increase scale for better resolution
      useCORS: true, // Enable cross-origin images
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // Ensure PDF dimensions are correct

        // Define padding
        const padding = 10;
        const pdfWidth = pdf.internal.pageSize.getWidth();
        // const pdfHeight = pdf.internal.pageSize.getHeight();

        // Calculate new dimensions with padding
        const imgWidth = pdfWidth - 2 * padding;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add image with padding
        pdf.addImage(imgData, 'JPEG', padding, padding, imgWidth, imgHeight);
        pdf.save(`${downloadFileName}.pdf`);
      })
      .catch((error) => {
        console.error("Error capturing the element:", error);
      });
  }

  return (
    <button onClick={downloadPdfDocument} className="btn btn-neutral mt-5">
      Download PDF
    </button>
  );
}

export default GeneratePdfWithProperPadding;




//there was an error using just html2canvas. here is the solution
// https://github.com/niklasvh/html2canvas/issues/3150#:~:text=Chrome%20version%20122.0.6261.94-,try%20npmjs.com/package/html2canvas%2Dpro%2C%20it%20supports%20color%20function%20oklch,-PunithDandluri%20commented%20on