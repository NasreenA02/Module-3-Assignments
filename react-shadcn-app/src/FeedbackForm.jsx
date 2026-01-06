import React, { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="card">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Your feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {submissions.length > 0 && <h3>Submissions:</h3>}
      {submissions.map((sub, index) => (
        <div key={index} className="card">
          <p><strong>Name:</strong> {sub.name}</p>
          <p><strong>Email:</strong> {sub.email}</p>
          <p><strong>Feedback:</strong> {sub.feedback}</p>
        </div>
      ))}
    </div>
  );
}
