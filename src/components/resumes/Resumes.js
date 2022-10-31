import React, { useState, useEffect } from "react";
import pdf from "../../Assets/CV_Ahmed.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resumes() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <center className="mt-20">
      <a href={pdf} target="_blank" className="flex justify-center border-2 w-36bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded w-44"> <AiOutlineDownload /> Download CV</a>
        <Document file={pdf} className="d-flex justify-content-center mt-6">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      <a href={pdf} target="_blank" className="flex justify-center border-2 w-36bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded w-44 m-4"> <AiOutlineDownload /> Download CV</a>
    </center>
  );
}

export default Resumes;
