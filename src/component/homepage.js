import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react"; 
import "../style/homepage.css";
import BenefitsSection from "../component/BenefitsSection.js";




const Homepage = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  return (
    <div className="homepage">
      {!isSignedIn ? (
        <header className="hero-section">
          <h1>AI-powered Essay Grading for History</h1>
          <p>Get instant, accurate, and professional grading for your history essays.</p>
          <button className="cta-button" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </header>
      ) : (
        <div className="role-selection">
          <h2>Mày là ai</h2>
          <div className="role-buttons">
            <button className="role-btn student" onClick={() => navigate("/student-dashboard")}>
              I'm a Student
            </button>
            <button className="role-btn teacher" onClick={() => navigate("/teacher-dashboard")}>
              I'm a Teacher
            </button>
          </div>
        </div>
      )}

      <section className="features">
        <div className="feature">
          <h2>🧠 AI-Powered Grading</h2>
          <p>Our advanced AI automatically evaluates and scores history essays with high accuracy.</p>
        </div>
        <div className="feature">
          <h2>📊 Detailed Feedback</h2>
          <p>Receive comprehensive feedback on missing key points, grammar, and spelling mistakes.</p>
        </div>
        <div className="feature">
          <h2>⚡ Fast & Reliable</h2>
          <p>Get instant results and improve your essay writing skills effectively.</p>
        </div>
      </section>

         {/* Benefit Section */}
         <BenefitsSection/>
         

      <footer className="footer">
        <p>© 2025 History Essay Grader. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
