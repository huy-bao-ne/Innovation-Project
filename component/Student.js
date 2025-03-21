import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react"; // Import Clerk Auth
import "../style/student.css";

const Student = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth(); // Lấy hàm đăng xuất từ Clerk
  const [activeTab, setActiveTab] = useState("pending");
  const [isEditing, setIsEditing] = useState(false);

  // Thông tin sinh viên (state)
  const [studentInfo, setStudentInfo] = useState({
    name: "Nguyễn Văn A",
    studentId: "20251234",
    birthDate: "2003-05-12",
    gender: "Nam",
    avatar: "https://via.placeholder.com/100"
  });

  // Xử lý thay đổi thông tin
  const handleChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  // Xử lý tải lên ảnh đại diện
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setStudentInfo({ ...studentInfo, avatar: imageUrl });
    }
  };

  // Xử lý đăng xuất
  const handleLogout = async () => {
    await signOut(); // Đăng xuất khỏi Clerk
    navigate("/"); // Quay về trang chủ ban đầu (chưa đăng nhập)
  };

  return (
    <div className="student-container">
      {/* Thanh công cụ */}
      <nav className="student-navbar">
        <button className={activeTab === "pending" ? "active" : ""} onClick={() => setActiveTab("pending")}>
          📌 Bài chưa làm & đang làm
        </button>
        <button className={activeTab === "completed" ? "active" : ""} onClick={() => setActiveTab("completed")}>
          ✅ Bài đã hoàn thành
        </button>
        <button className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>
          👤 Thông tin tài khoản
        </button>
      </nav>

      {/* Nội dung từng tab */}
      <div className={`content ${activeTab === "pending" ? "active" : ""}`}>
        <h2>📌 Bài chưa làm & đang làm</h2>
        <p>Danh sách các bài luận bạn chưa hoàn thành.</p>
      </div>

      <div className={`content ${activeTab === "completed" ? "active" : ""}`}>
        <h2>✅ Bài đã hoàn thành</h2>
        <p>Danh sách các bài luận bạn đã nộp.</p>
      </div>

      <div className={`content ${activeTab === "profile" ? "active" : ""}`}>
        <h2>👤 Thông tin tài khoản</h2>

        {isEditing ? (
          <div className="edit-form">
            {/* Upload ảnh đại diện */}
            <div className="avatar-upload">
              <img src={studentInfo.avatar} alt="Avatar" className="avatar-preview" />
              <label className="upload-btn">
                📷 Chọn ảnh
                <input type="file" accept="image/*" onChange={handleAvatarChange} />
              </label>
            </div>

            <label>Họ và tên:</label>
            <input type="text" name="name" value={studentInfo.name} onChange={handleChange} />

            <label>Mã số sinh viên:</label>
            <input type="text" name="studentId" value={studentInfo.studentId} onChange={handleChange} />

            <label>Ngày sinh:</label>
            <input type="date" name="birthDate" value={studentInfo.birthDate} onChange={handleChange} />

            <label>Giới tính:</label>
            <select name="gender" value={studentInfo.gender} onChange={handleChange}>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>

            <button className="save-button" onClick={() => setIsEditing(false)}>💾 Lưu</button>
          </div>
        ) : (
          <div className="profile-view">
            <img src={studentInfo.avatar} alt="Avatar" className="avatar-display" />
            <p><strong>Họ và tên:</strong> {studentInfo.name}</p>
            <p><strong>Mã số sinh viên:</strong> {studentInfo.studentId}</p>
            <p><strong>Ngày sinh:</strong> {studentInfo.birthDate}</p>
            <p><strong>Giới tính:</strong> {studentInfo.gender}</p>
            <button className="edit-button" onClick={() => setIsEditing(true)}>✏️ Chỉnh sửa</button>
            <button className="logout-button" onClick={handleLogout}>🚪 Đăng xuất</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Student;
