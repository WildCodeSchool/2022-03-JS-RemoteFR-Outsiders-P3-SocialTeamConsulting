import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "@style/NavBar.css";

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
      <h1>Social Team Consulting</h1>

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

      <div className="navbar-menu_wrapper">
        <NavLink to="/">
          <div
            role="button"
            tabIndex={0}
            className="navbar-button"
            onClick={() => handleisMenuVisible()}
          >
            <h1>Devenir intervenant partenaire</h1>
          </div>
        </NavLink>
        <NavLink to="/">
          <div
            role="button"
            tabIndex={0}
            className="navbar-button"
            onClick={() => handleisMenuVisible()}
          >
            <h1>Devenir association partenaire</h1>
          </div>
        </NavLink>
        <form action="" method="post" className="navbar-form_members">
          <div className="form-example">
            <label htmlFor="email">
              Email :
              <input type="text" name="name" id="name" required />
            </label>
          </div>
          <div className="form-example">
            <label htmlFor="mdp">
              Mot de passe :
              <input type="email" name="email" id="email" required />
            </label>
          </div>
          <div className="form-example">
            <input type="submit" value="Se connecter" />
          </div>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
