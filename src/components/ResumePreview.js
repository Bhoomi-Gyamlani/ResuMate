import React from "react";

const ResumePreview = ({ data }) => {
  return (
    <div
      style={{
        padding: "20px",
        marginTop: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
        border: "1px solid #ddd",
        width: "600px",
        margin: "0 auto",
      }}
    >
      {/* Name & Image Section */}
      <div style={{ textAlign: "center" }}>
        <img
          src={data.image}
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "10px",
          }}
        />
        <h1 style={{ color: "#333", fontWeight: "bold", textTransform: "uppercase" }}>{data.name}</h1>
        <p style={{ color: "#777", fontSize: "14px" }}>{data.email} | {data.contact}</p>
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF" }}>
          LinkedIn Profile
        </a>
      </div>

      {/* Achievements Section */}
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#333" }}>Achievements</h3>
        <p>{data.achievements}</p>
      </div>

     
    </div>
  );
};

export default ResumePreview;
