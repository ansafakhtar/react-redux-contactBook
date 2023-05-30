// import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactsList from "./components/ContactsList";
import AddContact from "./components/AddContact";

function App() {

  return (
    <>
      <nav>
        <Link to="/">
          <h2>Menu</h2>
        </Link>
        <ul>
          <li>
            <Link to="/contacts/">Contacts List</Link>
          </li>
          <li>
            <Link to="/contacts/add">Add New Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          {/* <Route path='/' element={<ContactsList contacts={contacts} isLoading={true} />} /> */}
          <Route path="/" element={<>Menu Page</>} />
          <Route path="/contacts" element={<ContactsList />} />
          <Route
            path="/contacts/:id"
            // element={<ContactsView getContacts={getContacts} />}
          />
          <Route path="/contacts/add" element={<AddContact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
