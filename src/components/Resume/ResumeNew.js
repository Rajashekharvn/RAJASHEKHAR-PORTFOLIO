// src/components/Resume/ResumeNew.jsx
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/RajashekharResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(typeof window !== "undefined" ? window.innerWidth : 1200);
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section reveal">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }} className="reveal-child">
          
          <Button
            style={{
              maxWidth: "250px",
              marginLeft: "10px",
              borderColor: "#c95bf5",
              color: "#c95bf5",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#c95bf5";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#c95bf5";
            }}
            onClick={() => {
              const link = document.createElement("a");
              link.href = pdf;
              link.download = "Rajashekhar_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>

        </Row>

        <Row className="resume d-flex flex-column align-items-center reveal-child">
          <Document file={pdf} className="d-flex flex-column align-items-center">
            {/* Page 1 */}
            <div style={{ marginBottom: "20px" }}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </div>
            {/* Page 2 */}
            <div>
              <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            </div>
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }} className="reveal-child">
          
          <Button
            style={{
              maxWidth: "250px",
              marginLeft: "10px",
              borderColor: "#c95bf5",
              color: "#c95bf5",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#c95bf5";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#c95bf5";
            }}
            onClick={() => {
              const link = document.createElement("a");
              link.href = pdf;
              link.download = "Rajashekhar_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>

        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
