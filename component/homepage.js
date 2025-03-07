import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react"; 
import "../style/homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  const { isSignedIn, signOut } = useAuth();

  return (
    <div className="homepage">
      {/* Navbar */}
      {isSignedIn && (
        <nav className="navbar">
          <div className="logo">Essay Grader</div>
          <div className="nav-links">
            <button className="nav-btn" onClick={() => navigate("/grading")}>Grading</button>
            <button className="nav-btn" onClick={() => navigate("/account")}>Account</button>
            <button className="nav-btn logout-btn" onClick={signOut}>Logout</button>
          </div>
        </nav>
      )}

      <header className="hero-section">
        <h1>AI-powered Essay Grading for History</h1>
        <p>Get instant, accurate, and professional grading for your history essays.</p>
        {!isSignedIn && (
          <button className="cta-button" onClick={() => navigate("/login")}>
            Get Started
          </button>
        )}
      </header>

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

      <footer className="footer">
        <p>© 2025 History Essay Grader. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
