// import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactsList from "./components/ContactsList";
import AddContact from "./components/AddContact";
import ContactView from "./components/ContactView";
import Welcome from "../public/Welcome.svg";

function App() {
  return (
    <>
      <nav className="sidenav">
        <Link to="/">
          <div className="sidenav-main">
            <i className="material-icons">contacts</i>
            <h2>Contacts</h2>
          </div>
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
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <img
                  src={Welcome}
                  alt="Welcome SVG"
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    justifySelf: "center",
                    width: "50vw",
                    height: "50vh",
                  }}
                />
              </div>
            }
          />
          <Route path="/contacts" element={<ContactsList />} />
          <Route path="/contacts/:id" element={<ContactView />} />
          <Route path="/contacts/add" element={<AddContact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
