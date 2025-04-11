import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/homepage.js";
import GradingPage from "./component/GradingPage.js";
import Login from "./component/login.js";
import Student from "./component/Student.js";
import Teacher from "./component/Teacher.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/grading" element={<GradingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<Student />} />
        <Route path="/teacher-dashboard" element={<Teacher />} />
      </Routes>
    </Router>
  );
}

export default App;
