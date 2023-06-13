import React from "react";
import "./ContactList.css";
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from "../services/contacts";

const ContactsList: React.FC = () => {
  const { data: contacts = [], isError, isLoading } = useGetContactsQuery();
  const [deletePerson] = useDeleteContactMutation();
  // const [contactList, setContactList] = useState<Partial<Contacts>>({});

  const handleDelete = async (id: number) => {
    await deletePerson(id);
    window.location.reload();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      <h2 className="top-bar">Address Book</h2>

      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact">
            <h1 className="contact-name">{contact.firstName} {contact.lastName}</h1>
            <p className="contact-address"> <b>Address:</b> {contact.address}</p>
            <p className="contact-city"> <b>City:</b> {contact.city}</p>
            <button className="btn">View</button>
            <button className="btn-secondary" onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
