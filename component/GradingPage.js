import React, { useState } from "react";
import "../style/gradingpage.css";

const GradingPage = () => {
  const [questions, setQuestions] = useState([]);
  const [file, setFile] = useState(null);

  // Xử lý tải file
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  // Xử lý thêm câu hỏi mới
  const addQuestion = () => {
    setQuestions([...questions, ""]); // Thêm một ô nhập câu hỏi trống
  };

  // Xử lý nhập nội dung câu hỏi
  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  // Xử lý xóa câu hỏi
  const deleteQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  return (
    <div className="grading-container">
      <h2>📑 Tạo bài tập</h2>

      {/* Upload file */}
      <div className="upload-section">
        <label className="file-label">
          📂 Chọn file bài tập:
          <input type="file" onChange={handleFileUpload} />
        </label>
        {file && <p>📄 Đã chọn: {file.name}</p>}
      </div>

      <h3>Hoặc nhập câu hỏi thủ công</h3>

      {/* Khu vực nhập câu hỏi */}
      <div className="question-section">
        <div className="question-list">
          {questions.map((question, index) => (
            <div key={index} className="question-item">
              <label className="question-label">Câu hỏi thứ {index + 1}</label>
              <div className="question-row">
                <input
                  type="text"
                  className="question-input"
                  placeholder="Nhập nội dung câu hỏi..."
                  value={question}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                />
                <button className="delete-question-button" onClick={() => deleteQuestion(index)}>🗑</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nút chức năng nằm ngoài khu vực nhập câu hỏi */}
      <div className="button-group">
        <button className="add-question-button" onClick={addQuestion}>
          ➕ Thêm câu hỏi
        </button>
        <button className="submit-button">📤 Tạo </button>
      </div>
    </div>
  );
};

export default GradingPage;
