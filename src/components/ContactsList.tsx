import React from "react";
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
      <h2>Address Book</h2>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} - {contact.address}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
