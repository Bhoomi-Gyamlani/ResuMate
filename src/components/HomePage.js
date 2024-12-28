import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/resume");
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#f0f8ff",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "3em", fontWeight: "bold", color: "#4db6ac" }}>
        Welcome to Resu-Mate
      </h1>
      <p style={{ fontSize: "1.5em", color: "#333", marginTop: "20px" }}>
      Create your professional resume with ease using Resu-mate. Simply fill in your details, upload a photo, and showcase your skills, education, and experience. Once you're done, download your personalized resume as a PDF.
      </p>
      <button
        onClick={handleNavigate}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "1.2em",
          backgroundColor: "#4db6ac",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Make Resume
      </button>
    </div>
  );
};

export default HomePage;
