import React, { useState } from "react";

import "@style/NavBar.css";

import NavBarLinks from "@components/NavBarLinks";
import NavBarForm from "@components/NavBarForm";
import logo from "@assets/SocialTeamConsultingLogo.ico";

function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleisMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <nav className={`${isMenuVisible ? "navbar-visible" : "navbar-hiden"}`}>
      <div>
        <img
          className="navbar-logo"
          src={logo}
          alt="logo de la Social Team Consulting"
        />
      </div>
      <h1 className="title">Social Team Consulting</h1>
      <div
        className="navbar-burger"
        role="button"
        onClick={() => {
          handleisMenuVisible();
        }}
        tabIndex={0}
      >
        <span className="navbar-bar" />
      </div>

      <div className="navbar-inline">
        <ul>
          <li>Nous rejoindre</li>
          <li>Se connecter</li>
        </ul>
      </div>

      <div className="navbar-menu_wrapper">
        <hr className="navbar-hr" />
        <NavBarLinks handleisMenuVisible={handleisMenuVisible} />
        <hr className="navbar-hr" />
        <NavBarForm />
      </div>
    </nav>
  );
}

export default NavBar;
