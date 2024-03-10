import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './resumeWithOptions.scss';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


const ResumeWithOptions = ({ pdf, hasPagination = false }) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                {/* <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} /> */}
                <Page pageNumber={pageNumber} />
            </Document>

            {hasPagination && (
                <div>
                    <p>
                        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                    </p>
                    <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                        Previous
                    </button>
                    <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
                        Next
                    </button>
                </div>
            )}
        </>
    );
};

export default ResumeWithOptions;
