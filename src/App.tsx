import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactsList from "./components/ContactsList";
import AddContact from "./components/AddContact";
import ContactView from "./components/ContactView";
import Welcome from "./assets/Welcome.svg";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
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
