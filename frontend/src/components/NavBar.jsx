import React, { useState } from "react";

import "@style/NavBar.css";

import NavBarLinks from "@components/NavBarLinks";
import NavBarForm from "@components/NavBarForm";
import logo from "@assets/SocialTeamConsultingLogo.ico";

function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleisMenuVisible = (isVisible) => {
    setIsMenuVisible(isVisible);
  };
  const [isLinkVisible, setIsLinkVisible] = useState(false);
  const showLink = (isVisible) => {
    setIsLinkVisible(isVisible);
  };
  const [isFormVisible, setIsFormVisible] = useState(false);
  const showForm = (isVisible) => {
    setIsFormVisible(isVisible);
  };
  return (
    <nav className={`${isMenuVisible ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="navbar-div_logo">
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
          handleisMenuVisible(!isMenuVisible);
        }}
        tabIndex={0}
      >
        <span className="navbar-bar" />
      </div>

      <div className="navbar-inline">
        <ul>
          <li
            className={`${isLinkVisible ? "navbar-li_highlight" : ""}`}
            onMouseOver={() => showLink(true)}
            onFocus={() => showLink(true)}
            onMouseLeave={() => showLink(false)}
          >
            <h2>Nous rejoindre</h2>
            <div
              className={`${
                isLinkVisible
                  ? "navbar-navbarlink-visible"
                  : "navbar-navbarlink-hidden"
              }`}
            >
              <NavBarLinks
                handleisMenuVisible={handleisMenuVisible}
                showLink={showLink}
              />
            </div>
          </li>
          <li
            className={`${isFormVisible ? "navbar-li_highlight" : ""}`}
            onMouseOver={() => showForm(true)}
            onFocus={() => showForm(true)}
            onMouseLeave={() => showForm(false)}
          >
            <h2>Se connecter</h2>
            <div
              className={`${
                isFormVisible
                  ? "navbar-navbarform-visible"
                  : "navbar-navbarform-hidden"
              }`}
            >
              {isFormVisible ? (
                <NavBarForm
                  handleisMenuVisible={handleisMenuVisible}
                  showForm={showForm}
                />
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
      </div>

      <div className="navbar-menu_wrapper">
        <hr className="navbar-hr" />
        <NavBarLinks handleisMenuVisible={handleisMenuVisible} />
        <hr className="navbar-hr" />
        {isMenuVisible ? <NavBarForm /> : ""}
      </div>
    </nav>
  );
}

export default NavBar;
