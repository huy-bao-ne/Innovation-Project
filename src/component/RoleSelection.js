import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/RoleSelection.css"; // CSS riêng nếu cần

const RoleSelection = () => {
    const navigate = useNavigate();

    const handleRoleSelection = (role) => {
        if (role === "student") {
            navigate("/student-dashboard"); // Chuyển đến trang Student
        } else if (role === "teacher") {
            navigate("/teacher-dashboard"); // Chuyển đến trang Teacher
        }
    };

    return (
        <div className="role-selection-container">
            <h2>Choose Your Role</h2>
            <button className="role-btn student" onClick={() => handleRoleSelection("student")}>Student</button>
            <button className="role-btn teacher" onClick={() => handleRoleSelection("teacher")}>Teacher</button>
        </div>
    );
};

export default RoleSelection;
