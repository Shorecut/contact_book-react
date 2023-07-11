import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useContactContext } from "../contexts/ContactContext";
import { useNavigate } from "react-router-dom";

const AddContactPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { addContact } = useContactContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !phone.trim()) {
      return;
    }

    const newContact = {
      name,
      surname,
      phone,
    };

    addContact(newContact);
    setName("");
    setSurname("");
    setPhone("");

    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center">Add Contact</h1>

      <Form onSubmit={handleSubmit} className="w-25 mx-auto">
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        <Form.Control
          a
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          type="text"
          placeholder="Surname"
          className="my-2"
        />
        <Form.Control
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="text"
          placeholder="Phone number"
        />
        <Button
          className="mx-auto d-block mt-2 px-5"
          variant="success"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddContactPage;
