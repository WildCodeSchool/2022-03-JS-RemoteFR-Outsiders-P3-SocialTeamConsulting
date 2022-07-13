import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "@style/NavBar.css";

import NavBarLinks from "@components/NavBarLinks";
import NavBarForm from "@components/NavBarForm";
import logo from "@assets/logo-STC.png";
import ExportContext from "../contexts/Context";

function NavBar({ isLinkVisible, showLink, isFormVisible, showForm }) {
  const { infoUser } = useContext(ExportContext.Context);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLogInVisible, setIsLogInVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (infoUser.email !== undefined && infoUser.email !== null) {
      setIsLogInVisible(true);
    } else {
      setIsLogInVisible(false);
    }
  }, [infoUser]);

  const handleisMenuVisible = (isVisible) => {
    setIsMenuVisible(isVisible);
  };

  const backOfficeAccess = () => {
    if (isLogInVisible) {
      return (
        <h2 onClick={() => navigate("/back_office")}>
          Accès au Tableau de bord
        </h2>
      );
    }
    return "";
  };

  return (
    <div className="fixed">
      <nav className={`${isMenuVisible ? "navbar-visible" : "navbar-hidden"}`}>
        <div className="navbar-div_logo">
          <img
            className="navbar-logo"
            src={logo}
            alt="logo de la Social Team Consulting"
            onClick={() => navigate("/")}
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
            {isLogInVisible ? <li>{backOfficeAccess()}</li> : ""}
            <li
              className={`${isLinkVisible ? "navbar-li_highlight" : ""}`}
              onClick={() => {
                showLink(!isLinkVisible);
                showForm(false);
              }}
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
                  navigate={navigate}
                  isLogInVisible={isLogInVisible}
                  handleisMenuVisible={handleisMenuVisible}
                  showLink={showLink}
                />
              </div>
            </li>
            <li
              className={`${isFormVisible ? "navbar-li_highlight" : ""}`}
              onClick={() => {
                showLink(false);
              }}
            >
              <h2
                onClick={() => {
                  showForm(!isFormVisible);
                }}
              >
                Se connecter
              </h2>
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
          {isLogInVisible ? <hr className="navbar-hr" /> : ""}
          {backOfficeAccess()}
          <hr className="navbar-hr" />
          <NavBarLinks
            navigate={navigate}
            isLogInVisible={isLogInVisible}
            handleisMenuVisible={handleisMenuVisible}
            showLink={showLink}
          />
          <hr className="navbar-hr" />
          {isMenuVisible ? <NavBarForm /> : ""}
        </div>
      </nav>
      <hr className="navbar-bottom-hr" />
    </div>
  );
}

export default NavBar;
