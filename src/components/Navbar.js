import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../image/logo.png";
import UKFlag from "../image/flag-united-kingdom.svg";
import GEFlag from "../image/flag-german.svg";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/home",
      text: "HOME",
    },
    {
      id: 2,
      path: "/",
      text: "MENU",
    },
    {
      id: 3,
      path: "/reservation",
      text: "RESERVATION",
    },
    {
      id: 4,
      path: "/gallery",
      text: "GALLERY",
    },
    {
      id: 5,
      path: "/contact",
      text: "CONTACT",
    },
    {
      id: 26,
      path: "/login",
      text: "LOGIN",
    },
  ];
  const [Selectlanguage, SetSelectlanguage] = useState("en");
  const EntoDe = (e) => {
    const updatelanguage = e.target.id;
    SetSelectlanguage(updatelanguage);
  };
  const DetoEn = (e) => {
    const updatelanguage = e.target.id;
    SetSelectlanguage(updatelanguage);
  };
  return (
    <header className="header">
      <div className="nav-container">
        <div className="nav-row">
          <div className="logo">
            <img src={Logo} alt="logo" id="logo2" />
          </div>
          <div className="menu">
            <nav className="menu1">
              <ul className="menu2">
                {links.map((link) => {
                  return (
                    <li key={link.id} className="link">
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  );
                })}
                <div className="svg_img">
                  {Selectlanguage === "en" ? (
                    <div onClick={EntoDe}>
                      <img src={UKFlag} className="svg" id="uk" alt="Enlish" />
                    </div>
                  ) : (
                    <div onClick={DetoEn}>
                      <img src={GEFlag} className="svg" id="en" alt="Dutch" />
                    </div>
                  )}
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
