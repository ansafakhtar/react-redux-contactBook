import React, { useState } from "react";
import {
  useGetContactQuery,
  useUpdateContactMutation,
} from "../services/contacts";
import { Contact } from "../types/types";
import "./ContactView.css";

const ContactView: React.FC = () => {
  const id = window.location.pathname.slice(10);
  const { data: contact } = useGetContactQuery(id);

  const [fieldDisabled, setFieldDisabled] = useState<boolean>(true);

  const [contactForm, setPersonForm] = useState<Partial<Contact>>({});
  const [editContact] = useUpdateContactMutation();

  const handleFieldDisable = () => {
    setFieldDisabled(!fieldDisabled);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      contactForm.firstName &&
      contactForm.lastName &&
      contactForm.address &&
      contactForm.city &&
      contactForm.email
    ) {
      await editContact(Object.assign(contactForm, { id }));
      setPersonForm({});
      window.location.reload();
    } else {
      alert("Please fill all the required fields");
    }
  };

  return (
    <div>
      <h1 className="top-bar">Contact Details</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="col">
          <div className="field-tag">First Name:</div>
          <input
            className="effect"
            id="firstName"
            name="firstName"
            type="text"
            value={contactForm?.firstName || ""}
            onChange={handleInputChange}
            required
            placeholder={contact?.firstName}
            disabled={fieldDisabled}
          />
          <span className="focus-border"></span>
        </div>

        <div className="col">
          <div className="field-tag">Last Name:</div>
          <input
            className="effect"
            id="lastName"
            name="lastName"
            type="text"
            value={contactForm?.lastName || ""}
            onChange={handleInputChange}
            required
            placeholder={contact?.lastName}
            disabled={fieldDisabled}
          />
          <span className="focus-border"></span>
        </div>

        <div className="col">
          <div className="field-tag">Address:</div>
          <input
            className="effect"
            id="address"
            name="address"
            type="text"
            value={contactForm?.address || ""}
            onChange={handleInputChange}
            required
            placeholder={contact?.address}
            disabled={fieldDisabled}
          />
          <span className="focus-border"></span>
        </div>

        <div className="col">
          <div className="field-tag">City:</div>
          <input
            className="effect"
            id="city"
            name="city"
            type="text"
            value={contactForm?.city || ""}
            onChange={handleInputChange}
            required
            placeholder={contact?.city}
            disabled={fieldDisabled}
          />
          <span className="focus-border"></span>
        </div>

        <div className="col">
          <div className="field-tag">Email:</div>
          <input
            className="effect"
            id="email"
            name="email"
            type="email"
            value={contactForm?.email || ""}
            onChange={handleInputChange}
            required
            placeholder={contact?.email}
            disabled={fieldDisabled}
          />
          <span className="focus-border"></span>
        </div>

        <div className="col">
          <div className="field-tag">LinkedIn:</div>
          <input
            className="effect"
            id="linkedIn"
            name="linkedIn"
            type="text"
            value={contactForm?.linkedIn || ""}
            onChange={handleInputChange}
            placeholder={contact?.linkedIn}
            disabled={fieldDisabled}
          />
          <span className="focus-border"></span>
        </div>

        <div className="col">
          <div className="field-tag">Twitter:</div>
          <input
            className="effect"
            id="twitter"
            name="twitter"
            type="text"
            value={contactForm?.twitter || ""}
            onChange={handleInputChange}
            placeholder={contact?.twitter}
            disabled={fieldDisabled}
          />
          <span className="focus-border"></span>
        </div>
        <button
          className="btn add-btn"
          type="button"
          onClick={handleFieldDisable}
          disabled={!fieldDisabled}
        >
          Edit
        </button>
        <button
          className="btn-secondary add-btn"
          type="submit"
          onClick={handleSubmit}
          disabled={fieldDisabled}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ContactView;
