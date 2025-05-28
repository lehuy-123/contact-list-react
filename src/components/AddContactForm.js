import React, { useState } from "react";

function AddContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    onAdd({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Họ tên"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginRight: 10, padding: 5 }}
      />
      <input
        type="text"
        placeholder="Số điện thoại"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        style={{ marginRight: 10, padding: 5 }}
      />
      <button type="submit" style={{ padding: "5px 12px" }}>Thêm liên hệ</button>
    </form>
  );
}

export default AddContactForm;
