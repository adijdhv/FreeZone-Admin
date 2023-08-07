import React, { useEffect, useRef, useState } from 'react';
import pdfjs from 'pdfjs-dist';

const PDFToImage = ({ pdfUrl }) => {
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Load and render the PDF
    pdfjs.getDocument(pdfUrl).promise.then((pdf) => {
      const pageNumber = 1; // Change this if you want to render a different page
      pdf.getPage(pageNumber).then((page) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 }); // Adjust the scale as needed

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        page.render(renderContext).promise.then(() => {
          // Convert the canvas to an image
          const imageDataURL = canvas.toDataURL('image/png');
          setImageData(imageDataURL);
        });
      });
    });
  }, [pdfUrl]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      {imageData && <img src={imageData} alt="PDF to Image" />}
    </div>
  );
};

export default PDFToImage;