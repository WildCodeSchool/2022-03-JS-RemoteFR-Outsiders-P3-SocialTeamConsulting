import React from "react";
import { NavLink } from "react-router-dom";

function NavBarLinks({ handleisMenuVisible, showLink }) {
  return (
    <>
      <NavLink to="/Page1">
        <div
          role="button"
          tabIndex={0}
          className="navbar-button"
          onClick={() => {
            handleisMenuVisible(false);
            showLink(false);
          }}
        >
          <h2>Devenir intervenant partenaire</h2>
        </div>
      </NavLink>
      <hr className="navbar-hr" />
      <NavLink to="/Page2">
        <div
          role="button"
          tabIndex={0}
          className="navbar-button"
          onClick={() => {
            handleisMenuVisible(false);
            showLink(false);
          }}
        >
          <h2>Devenir association partenaire</h2>
        </div>
      </NavLink>
    </>
  );
}

export default NavBarLinks;
