import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [sidebarOpen, setSideBarOpen] = useState<boolean>(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  const sidebarNavClass = sidebarOpen ? "sidebar-nav" : "close";
  const burgerIconClass = sidebarOpen ? "material-icons burger-menu close" : "material-icons burger-menu";
  const closeIconClass = sidebarOpen ? "material-icons burger-menu menu-close" : "material-icons burger-menu close";
  
  return (
    <>
      <i className={burgerIconClass} onClick={handleViewSidebar}>
        menu
      </i>
      <i className={closeIconClass} onClick={handleViewSidebar}>
        close
      </i>
      {/* <nav className="sidebar-nav"> */}
      <nav className={sidebarNavClass}>
        <ul>
          <li>
            <Link to="/">
              <div className="sidebar-nav-main">
                <i className="material-icons">contacts</i>
                <h2>Contacts</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contacts/" className="sidebar-links">
              Contacts List
            </Link>
          </li>
          <li>
            <Link to="/contacts/add" className="sidebar-links">
              Add New Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
