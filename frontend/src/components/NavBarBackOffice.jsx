import logo from "@assets/SocialTeamConsultingLogo.ico";
import { NavLink, useNavigate } from "react-router-dom";
import "@style/BackOffice.css";
import React, { useState } from "react";

import "@style/NavBar.css";
import DataLinksIntervenants from "@services/linksIntervenants.json";

import NavBarBackOfficeLinks from "@components/NavBarBackOfficeLinks";

function NavBarBackOffice() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleisMenuVisible = (isVisible) => {
    setIsMenuVisible(isVisible);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar-desktop-backoffice">
        <div className="nav-part-one">
          <div className="navbar-desk-logo">
            <img
              className="navbar-logo"
              src={logo}
              alt="logo de la Social Team Consulting"
            />
            <h1>Social Team Consulting</h1>
          </div>
          <div className="navbar-desk-img-profile">
            <img
              src="https://randomuser.me/api/portraits/women/90.jpg"
              alt="profile"
            />
          </div>
          <div className="navbar-desk-name">
            <h1>Laura Dupond</h1>
          </div>
        </div>

        <div className="nav-part-two">
          {DataLinksIntervenants.map((el) => (
            <div>
              <NavLink to={el.link}>
                <div role="button" tabIndex={0} className="navbar-button">
                  <li>{el.section}</li>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <div className="navbar-mobile-backoffice">
        <div className="fixed">
          <nav
            className={`${isMenuVisible ? "navbar-visible" : "navbar-hidden"}`}
          >
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

            <div className="navbar-menu_wrapper">
              <hr className="navbar-hr" />
              <NavBarBackOfficeLinks
                handleisMenuVisible={handleisMenuVisible}
              />
            </div>
          </nav>
          <hr className="navbar-bottom-hr" />
          <div className="navbar-header">
            <hr className="navbar-bottom-hr" />
            <div className="profile-desc">
              <div className="profile-desc-picture">
                <img
                  src="https://randomuser.me/api/portraits/women/90.jpg"
                  alt="profile"
                />
              </div>
              <div className="profile-desc-name">
                <h2>Kevin PESET</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarBackOffice;
