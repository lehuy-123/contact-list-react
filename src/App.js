import React, { useState } from "react";
import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  const handleDeleteContact = (index) => {
    setContacts(prev => prev.filter((_, idx) => idx !== index));
  };

  // Lọc liên hệ theo từ khóa tìm kiếm
  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  );

  return (
    <div style={{ width: 420, margin: "30px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
      <h1 style={{ textAlign: "center" }}>Quản lý danh sách liên hệ</h1>
      <AddContactForm onAdd={handleAddContact} />
      <input
        type="text"
        placeholder="Tìm kiếm liên hệ theo tên hoặc số ĐT"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: 12, width: "100%", padding: 6 }}
      />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
