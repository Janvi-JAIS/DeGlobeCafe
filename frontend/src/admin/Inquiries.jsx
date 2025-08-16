import React, { useState } from "react";
import "./Inquiries.css";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState([
    {
      name: "Ravi Sharma",
      email: "ravi@example.com",
      message: "Can I book a table for 5 people this weekend?",
      date: "2025-07-28",
      read: false,
    },
    {
      name: "Priya Mehta",
      email: "priya@example.com",
      message: "Do you have vegan options?",
      date: "2025-07-30",
      read: true,
    },
  ]);

  const toggleRead = (index) => {
    const updated = [...inquiries];
    updated[index].read = !updated[index].read;
    setInquiries(updated);
  };

  const deleteInquiry = (index) => {
    const updated = [...inquiries];
    updated.splice(index, 1);
    setInquiries(updated);
  };

  return (
    <div className="inquiries">
      <h2>Customer Inquiries</h2>
      {inquiries.length === 0 ? (
        <p>No inquiries yet.</p>
      ) : (
        <ul className="inquiry-list">
          {inquiries.map((inq, idx) => (
            <li key={idx} className={inq.read ? "read" : "unread"}>
              <div className="inquiry-header">
                <strong>{inq.name}</strong> ({inq.email}) — {inq.date}
              </div>
              <p>{inq.message}</p>
              <div className="inquiry-actions">
                <button onClick={() => toggleRead(idx)}>
                  Mark as {inq.read ? "Unread" : "Read"}
                </button>
                <button onClick={() => deleteInquiry(idx)} className="delete">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inquiries;
