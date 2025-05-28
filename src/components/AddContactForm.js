import React, { useState } from "react";

function AddContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // Thêm email

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !phone || !email) return alert("Nhập đủ thông tin!");
    onAdd({ name, phone, email });
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
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
      <button type="submit">Thêm liên hệ</button>
    </form>
  );
}

export default AddContactForm;
