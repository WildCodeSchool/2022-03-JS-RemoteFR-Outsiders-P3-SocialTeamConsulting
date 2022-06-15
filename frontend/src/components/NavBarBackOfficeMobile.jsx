import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "@style/NavBar.css";
import "@style/BackOffice.css";

import NavBarBackOfficeLinks from "@components/NavBarBackOfficeLinks";
import logo from "@assets/SocialTeamConsultingLogo.ico";

function NavBarBackOfficeMobile() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleisMenuVisible = (isVisible) => {
    setIsMenuVisible(isVisible);
  };

  const navigate = useNavigate();

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

        <div className="navbar-menu_wrapper">
          <hr className="navbar-hr" />
          <NavBarBackOfficeLinks handleisMenuVisible={handleisMenuVisible} />
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
  );
}

export default NavBarBackOfficeMobile;
