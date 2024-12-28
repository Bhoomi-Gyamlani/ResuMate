import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DownloadResume = ({ resumeRef }) => {
  const handleDownload = async () => {
    if (!resumeRef?.current) {
      console.error("Resume reference is null.");
      return;
    }

    try {
      const element = resumeRef.current;
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Error while generating PDF:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        margin: "20px 0",
      }}
    >
      Download Resume
    </button>
  );
};

export default DownloadResume;
