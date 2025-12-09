import { WindowControls } from "@components";
import { WindowWrapper } from "@hoc";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Document, Page, pdfjs } from "react-pdf";

// Use CDN worker to ensure version compatibility
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  const goToNextPage = () =>
    setCurrentPage((prev) => (numPages ? Math.min(prev + 1, numPages) : prev));

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="/files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="flex h-[calc(100%-60px)] flex-col overflow-hidden">
        <div className="flex-1 overflow-auto p-5">
          {error && <div className="text-sm text-red-500">Error: {error}</div>}

          <Document
            file="/files/resume.pdf"
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              setCurrentPage(1);
            }}
            onLoadError={(error) => {
              console.error("Failed to load:", error);
              setError(error.message);
            }}
            loading={<div>Loading PDF...</div>}
          >
            <Page
              pageNumber={currentPage}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </Document>
        </div>

        {numPages && (
          <div className="flex flex-col items-center gap-3 border-t border-white/10 px-5 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage <= 1}
                title="Previous page"
                className="rounded border border-white/20 p-2 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="icon " fill="black" />
              </button>
              <p className="text-sm">
                Page {currentPage} of {numPages}
              </p>
              <button
                onClick={goToNextPage}
                disabled={numPages ? currentPage >= numPages : false}
                title="Next page"
                className="rounded border border-white/20 p-2 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className="icon" fill="black" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
