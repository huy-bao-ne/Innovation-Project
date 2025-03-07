import React, { useState } from "react";
import "../style/gradingpage.css";

const GradingPage = () => {
  const [showResult, setShowResult] = useState(false);

  const handleGrade = () => {
    setShowResult(true);
  };

  return (
    <div className="grading-container">
      <div className="grading-box">
        <h2>Essay Grading System</h2>
        
        <label>Upload Sample Essay:</label>
        <input type="file" className="upload-btn" accept=".pdf,.docx" />
        
        <label>Enter Sample Essay:</label>
        <textarea placeholder="Type or paste the sample essay here..."></textarea>

        <label>Upload Student's Essay:</label>
        <input type="file" className="upload-btn" accept=".pdf,.docx" />
        
        <label>Enter Student's Essay:</label>
        <textarea placeholder="Type or paste the student's essay here..."></textarea>

        <button className="upload-btn" onClick={handleGrade}>Grade Essay</button>

        <div className={`result-box ${showResult ? "show" : ""}`}>
          <h3>Grading Result</h3>
          <p>Score: ../100</p>
          <p>Missing Keywords:..........</p>
          <p>Spelling Errors: ...................</p>
        </div>
      </div>
    </div>
  );
};

export default GradingPage;
