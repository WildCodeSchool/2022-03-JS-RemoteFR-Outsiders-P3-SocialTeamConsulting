import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "@style/NavBar.css";

import logo from "@assets/SocialTeamConsultingLogo.ico";

function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleisMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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

      <div className="navbar-inline">
        <ul>
          <li>Nous rejoindre</li>
          <li>Se connecter</li>
        </ul>
      </div>

      <div className="navbar-menu_wrapper">
        <hr className="navbar-hr" />
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
        <hr className="navbar-hr" />
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
        <hr className="navbar-hr" />
        <form action="" method="post" className="navbar-form_members">
          <legend className="navbar-legend">Déjà membre</legend>
          <div className="form-example">
            <label htmlFor="email">
              <p>Email :</p>
              <input type="email" name="email" id="email" required />
            </label>
          </div>
          <div className="form-example">
            <label htmlFor="mdp">
              <p>Mot de passe :</p>
              <input type="password" name="password" id="password" required />
            </label>
          </div>
          <div className="form-example">
            <input
              className="button-blue navbar-input"
              type="submit"
              value="Se connecter"
              onClick={(e) => handleSubmit(e)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
