import React from "react";

function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <h2>Danh sách liên hệ (Test cập nhật branch mới)</h2>
      <ul style={{ padding: 0 }}>
        {contacts.map((contact, idx) => (
          <li key={idx} style={{ marginBottom: 8, listStyle: "none" }}>
            <strong>{contact.name}</strong> - {contact.phone} - {contact.email}
            <button
              onClick={() => onDelete(idx)}
              style={{ marginLeft: 15, padding: "2px 8px" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
