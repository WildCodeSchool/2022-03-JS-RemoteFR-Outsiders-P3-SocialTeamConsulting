import linksIntervenants from "@services/linksIntervenants";
import React from "react";
import logo from "@assets/SocialTeamConsultingLogo.ico";
import { NavLink } from "react-router-dom";
import "@style/BackOffice.css";

function NavBarBackOfficeDesktop() {
  return (
    <>
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
        {linksIntervenants.map((el) => (
          <div>
            <NavLink to={el.link}>
              <div role="button" tabIndex={0} className="navbar-button">
                <li>{el.section}</li>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default NavBarBackOfficeDesktop;
