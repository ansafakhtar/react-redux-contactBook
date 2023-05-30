import { Contact } from "../types/types";
import React, { useState } from "react";
import { useAddContactMutation } from "../services/contacts";

const AddContact: React.FC = () => {
  const [contactForm, setPersonForm] = useState<Partial<Contact>>({});
  const [addPerson] = useAddContactMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.firstName && contactForm.lastName && contactForm.address) {
      await addPerson(contactForm);
      setPersonForm({});
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Create Contact</h2>

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={contactForm.firstName || ""}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={contactForm.lastName || ""}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          id="address"
          name="address"
          type="text"
          value={contactForm.address || ""}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={contactForm.email || ""}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="linkdin">LinkdIn:</label>
        <input
          id="linkdin"
          name="linkdin"
          type="text"
          value={contactForm.linkedIn || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="twitter">Twitter:</label>
        <input
          id="twitter"
          name="twitter"
          type="text"
          value={contactForm.twitter || ""}
          onChange={handleInputChange}
        />

        <div className="actions-section">
          <button className="button blue" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default AddContact;
