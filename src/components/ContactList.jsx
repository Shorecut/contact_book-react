import React, { useEffect } from "react";
import { useContactContext } from "../contexts/ContactContext";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { contacts, getContacts } = useContactContext();
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Contact List</h1>

      <div className="block">
        {contacts.map((item) => (
          <ContactItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
