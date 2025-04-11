import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react"; // Import Clerk Auth
import "../style/teacher.css";

const Teacher = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth(); // Lấy hàm đăng xuất từ Clerk
  const [activeTab, setActiveTab] = useState("assignments");
  const [isEditing, setIsEditing] = useState(false);

  // Thông tin giáo viên (state)
  const [teacherInfo, setTeacherInfo] = useState({
    name: "Trần Văn B",
    teacherId: "GV98765",
    birthDate: "1985-08-20",
    gender: "Nam",
    avatar: "https://via.placeholder.com/100"
  });

  // Xử lý thay đổi thông tin
  const handleChange = (e) => {
    setTeacherInfo({ ...teacherInfo, [e.target.name]: e.target.value });
  };

  // Xử lý tải lên ảnh đại diện
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTeacherInfo({ ...teacherInfo, avatar: imageUrl });
    }
  };

  // Xử lý đăng xuất
  const handleLogout = async () => {
    await signOut(); // Đăng xuất khỏi Clerk
    navigate("/"); // Quay về trang chủ ban đầu (chưa đăng nhập)
  };

  return (
    <div className="teacher-container">
      {/* Thanh công cụ */}
      <nav className="teacher-navbar">
        <button className={activeTab === "assignments" ? "active" : ""} onClick={() => setActiveTab("assignments")}>
          ➕ Danh sách học sinh
        </button>
        <button className={activeTab === "assigned" ? "active" : ""} onClick={() => setActiveTab("assigned")}>
          📋 Các bài đã giao
        </button>
        <button className={activeTab === "graded" ? "active" : ""} onClick={() => setActiveTab("graded")}>
          ✅ Các bài đã chấm điểm
        </button>
        <button className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>
          👤 Thông tin tài khoản
        </button>
      </nav>

      {/* Nội dung từng tab */}
      <div className={`content ${activeTab === "assignments" ? "active" : ""}`}>
        <h2>➕ Danh sách học sinh</h2>
        <p>Danh sách cho học sinh.</p>
      </div>

      <div className={`content ${activeTab === "assigned" ? "active" : ""}`}>
  <h2>📋 Các bài đã giao</h2>
  <p>Danh sách các bài tập đã giao cho học sinh.</p>
  <button className="add-assignment-button" onClick={() => navigate("/grading")}>
    ➕ Thêm bài tập
  </button>
</div>


      <div className={`content ${activeTab === "graded" ? "active" : ""}`}>
        <h2>✅ Các bài đã chấm điểm</h2>
        <p>Danh sách các bài tập đã chấm.</p>
      </div>

      <div className={`content ${activeTab === "profile" ? "active" : ""}`}>
        <h2>👤 Thông tin tài khoản</h2>

        {isEditing ? (
          <div className="edit-form">
            {/* Upload ảnh đại diện */}
            <div className="avatar-upload">
              <img src={teacherInfo.avatar} alt="Avatar" className="avatar-preview" />
              <label className="upload-btn">
                📷 Chọn ảnh
                <input type="file" accept="image/*" onChange={handleAvatarChange} />
              </label>
            </div>

            <label>Họ và tên:</label>
            <input type="text" name="name" value={teacherInfo.name} onChange={handleChange} />

            <label>Mã số giáo viên:</label>
            <input type="text" name="teacherId" value={teacherInfo.teacherId} onChange={handleChange} />

            <label>Ngày sinh:</label>
            <input type="date" name="birthDate" value={teacherInfo.birthDate} onChange={handleChange} />

            <label>Giới tính:</label>
            <select name="gender" value={teacherInfo.gender} onChange={handleChange}>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>

            <button className="save-button" onClick={() => setIsEditing(false)}>💾 Lưu</button>
          </div>
        ) : (
          <div className="profile-view">
            <img src={teacherInfo.avatar} alt="Avatar" className="avatar-display" />
            <p><strong>Họ và tên:</strong> {teacherInfo.name}</p>
            <p><strong>Mã số giáo viên:</strong> {teacherInfo.teacherId}</p>
            <p><strong>Ngày sinh:</strong> {teacherInfo.birthDate}</p>
            <p><strong>Giới tính:</strong> {teacherInfo.gender}</p>
            <button className="edit-button" onClick={() => setIsEditing(true)}>✏️ Chỉnh sửa</button>
            <button className="logout-button" onClick={handleLogout}>🚪 Đăng xuất</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teacher;
