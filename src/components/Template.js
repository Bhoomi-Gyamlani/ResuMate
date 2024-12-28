import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

const Template = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    linkedin: "",
    about: "",
    skills: "",
    education: "",
    experience: "",
    achievements: "",
    projects: "",
    image: null,
  });

  const resumeRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData((prevData) => ({ ...prevData, image: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const element = resumeRef.current;
    const options = {
      margin: 0.5,
      filename: "resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newValue = e.target.value + "\n";
      e.target.value = newValue;
      setUserData({
        ...userData,
        [e.target.name]: newValue,
      });
    }
  };

  const convertNewlinesToHTML = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#e0f7fa" }}>
      {/* Form Section */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          style={{ width: "100%", maxWidth: "400px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          style={{ width: "100%", maxWidth: "400px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>Contact Number</label>
        <input
          type="text"
          name="contact"
          value={userData.contact}
          onChange={handleInputChange}
          style={{ width: "100%", maxWidth: "400px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>LinkedIn URL</label>
        <input
          type="text"
          name="linkedin"
          value={userData.linkedin}
          onChange={handleInputChange}
          style={{ width: "100%", maxWidth: "400px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>About</label>
        <textarea
          name="about"
          value={userData.about}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ width: "100%", maxWidth: "400px", height: "100px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>Skills</label>
        <textarea
          name="skills"
          value={userData.skills}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ width: "100%", maxWidth: "400px", height: "100px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>Education</label>
        <textarea
          name="education"
          value={userData.education}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ width: "100%", maxWidth: "400px", height: "100px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>Experience</label>
        <textarea
          name="experience"
          value={userData.experience}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ width: "100%", maxWidth: "400px", height: "100px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>Achievements (Optional)</label>
        <textarea
          name="achievements"
          value={userData.achievements}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ width: "100%", maxWidth: "400px", height: "100px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>Projects (Optional)</label>
        <textarea
          name="projects"
          value={userData.projects}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ width: "100%", maxWidth: "400px", height: "100px", marginBottom: "10px", padding: "10px", borderColor: "#4db6ac" }}
        />
        <label>Upload Image</label>
        <input type="file" onChange={handleImageUpload} style={{ width: "100%", maxWidth: "400px", borderColor: "#4db6ac" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={handleDownload}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#4db6ac", color: "#fff", border: "none", borderRadius: "5px" }}
        >
          Download PDF
        </button>
      </div>

      {/* Resume Preview Section */}
      <div ref={resumeRef} style={{ backgroundColor: "#ffffff", padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
          <img
            src={userData.image || "https://via.placeholder.com/100"}
            alt="Profile"
            style={{
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              marginRight: "40px",
              marginLeft: "50px",
            }}
          />
          <div style={{ textAlign: "center", flex: 1 }}>
            <h2 style={{ margin: 0, fontSize: "36px", fontWeight: "bold", textTransform: "uppercase" }}>
              {userData.name}
            </h2>
            <p style={{ margin: "5px 0", fontSize: "20px" }}>
              {userData.email} | {userData.contact}
            </p>
            <p style={{ margin: "5px 0", fontSize: "18px", color: "#0077b5" }}>
              <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Sections */}
        {userData.about && (
          <div style={{ marginBottom: "20px", paddingLeft: "30px" }}>
            <h3 style={{ color: "#4db6ac", fontSize: "30px", fontWeight: "bold", textTransform: "uppercase" }}>About</h3>
            <p style={{ fontSize: "20px", color: "black" }}>{convertNewlinesToHTML(userData.about)}</p>
          </div>
        )}
        {userData.skills && (
          <div style={{ marginBottom: "20px", paddingLeft: "30px" }}>
            <h3 style={{ color: "#4db6ac", fontSize: "30px", fontWeight: "bold", textTransform: "uppercase" }}>Skills</h3>
            <p style={{ fontSize: "20px", color: "black" }}>{convertNewlinesToHTML(userData.skills)}</p>
          </div>
        )}
        {userData.education && (
          <div style={{ marginBottom: "20px", paddingLeft: "30px" }}>
            <h3 style={{ color: "#4db6ac", fontSize: "30px", fontWeight: "bold", textTransform: "uppercase" }}>Education</h3>
            <p style={{ fontSize: "20px", color: "black" }}>{convertNewlinesToHTML(userData.education)}</p>
          </div>
        )}
        {userData.experience && (
          <div style={{ marginBottom: "20px", paddingLeft: "30px" }}>
            <h3 style={{ color: "#4db6ac", fontSize: "30px", fontWeight: "bold", textTransform: "uppercase" }}>Experience</h3>
            <p style={{ fontSize: "20px", color: "black" }}>{convertNewlinesToHTML(userData.experience)}</p>
          </div>
        )}
        {userData.achievements && (
          <div style={{ marginBottom: "20px", paddingLeft: "30px" }}>
            <h3 style={{ color: "#4db6ac", fontSize: "30px", fontWeight: "bold", textTransform: "uppercase" }}>Achievements</h3>
            <p style={{ fontSize: "20px", color: "black" }}>{convertNewlinesToHTML(userData.achievements)}</p>
          </div>
        )}
        {userData.projects && (
          <div style={{ marginBottom: "20px", paddingLeft: "30px" }}>
            <h3 style={{ color: "#4db6ac", fontSize: "30px", fontWeight: "bold", textTransform: "uppercase" }}>Projects</h3>
            <p style={{ fontSize: "20px", color: "black" }}>{convertNewlinesToHTML(userData.projects)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;




