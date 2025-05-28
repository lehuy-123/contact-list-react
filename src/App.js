import React, { useState } from "react";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // Thêm state email

  // Hàm thêm liên hệ mới
  const handleAddContact = () => {
    if (!name || !phone || !email) return alert("Vui lòng nhập đủ thông tin!");

    setContacts(prev => [
      ...prev,
      { name, phone, email }
    ]);
    setName("");
    setPhone("");
    setEmail(""); // Reset trường email
  };

  // Hàm xóa liên hệ
  const handleDeleteContact = index => {
    setContacts(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ width: 420, margin: "30px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
      <h1 style={{ textAlign: "center" }}>Quản lý danh sách liên hệ</h1>
      <input
        type="text"
        placeholder="Họ tên"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <input
        type="text"
        placeholder="Số điện thoại"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button onClick={handleAddContact}>Thêm liên hệ</button>

      <h2 style={{ marginTop: 24 }}>Danh sách liên hệ</h2>
      <ul>
        {contacts.map((c, idx) => (
          <li key={idx}>
            <b>{c.name}</b> - {c.phone} - {c.email}{" "}
            <button onClick={() => handleDeleteContact(idx)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
