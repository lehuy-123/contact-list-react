import React, { useState } from "react";
import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  const handleDeleteContact = (index) => {
    setContacts(prev => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div style={{ width: 420, margin: "30px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
      <h1 style={{ textAlign: "center" }}>Quản lý danh sách liên hệ</h1>
      <AddContactForm onAdd={handleAddContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
