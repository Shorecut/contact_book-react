import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContactContext } from "../contexts/ContactContext";
import { Form, Button } from "react-bootstrap";

const EditContactPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { oneContact, getOneContact, editContact } = useContactContext();

  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !phone.trim()) {
      return;
    }

    const newData = {
      name,
      surname,
      phone,
    };
    editContact(id, newData);
    setName("");
    setSurname("");
    setPhone("");
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center">Edit Contact</h1>

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
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditContactPage;
