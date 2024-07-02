/* eslint-disable react/prop-types */
import html2canvas from 'html2canvas-pro';
import { jsPDF } from "jspdf";

const GenerateSimplePdf = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = async() => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <button onClick={downloadPdfDocument} className="btn btn-neutral mt-5">Download PDF</button>

}
export default GenerateSimplePdf;