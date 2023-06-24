import { Contact } from "../types/types";
import React, { useState } from "react";
import { useAddContactMutation } from "../services/contacts";
import "./AddContact.css";

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
      window.location.reload();
    }
  };

  return (
    <>
      <h2 className="top-bar">Add Contact</h2>
      <div className="container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="col-3">
            <input
              className="effect"
              id="firstName"
              name="firstName"
              type="text"
              value={contactForm.firstName || ""}
              onChange={handleInputChange}
              required
              placeholder="First Name"
            />
            <span className="focus-border"></span>
          </div>

          <div className="col-3">
            <input
              className="effect"
              id="lastName"
              name="lastName"
              type="text"
              value={contactForm.lastName || ""}
              onChange={handleInputChange}
              required
              placeholder="Last Name"
            />
            <span className="focus-border"></span>
          </div>

          <div className="col-3">
            <input
              className="effect"
              id="address"
              name="address"
              type="text"
              value={contactForm.address || ""}
              onChange={handleInputChange}
              required
              placeholder="Address"
            />
            <span className="focus-border"></span>
          </div>

          <div className="col-3">
            <input
              className="effect"
              id="city"
              name="city"
              type="text"
              value={contactForm.city || ""}
              onChange={handleInputChange}
              required
              placeholder="City"
            />
            <span className="focus-border"></span>
          </div>

          <div className="col-3">
            <input
              className="effect"
              id="email"
              name="email"
              type="email"
              value={contactForm.email || ""}
              onChange={handleInputChange}
              required
              placeholder="Email"
            />
            <span className="focus-border"></span>
          </div>

          <div className="col-3">
            <input
              className="effect"
              id="linkedIn"
              name="linkedIn"
              type="text"
              value={contactForm.linkedIn || ""}
              onChange={handleInputChange}
              placeholder="LinkedIn"
            />
            <span className="focus-border"></span>
          </div>

          <div className="col-3">
            <input
              className="effect"
              id="twitter"
              name="twitter"
              type="text"
              value={contactForm.twitter || ""}
              onChange={handleInputChange}
              placeholder="Twitter"
            />
            <span className="focus-border"></span>
          </div>

          <button className="btn add-btn" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default AddContact;
