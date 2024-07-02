/* eslint-disable react/prop-types */
import html2canvas from 'html2canvas-pro';

const GeneratePng = ({ rootElementId, downloadFileName }) => {
  const downloadImageDocument = async (format) => {
    const input = document.getElementById(rootElementId);
    html2canvas(input, {
      scale: 2, // Increase scale for better resolution
      useCORS: true, // Enable cross-origin images
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL(`image/${format}`);
        const link = document.createElement('a');
        link.href = imgData;
        link.download = `${downloadFileName}.${format}`;
        link.click();
      })
      .catch((error) => {
        console.error("Error capturing the element:", error);
      });
  };

  return (
    <>
      <button
        onClick={() => downloadImageDocument('png')}
        className="btn btn-neutral mt-5 ml-3"
      >
        Download PNG
      </button>
      <button
        onClick={() => downloadImageDocument('jpeg')}
        className="btn btn-neutral mt-5 ml-3"
      >
        Download JPG
      </button>
    </>
  );
};

export default GeneratePng;
