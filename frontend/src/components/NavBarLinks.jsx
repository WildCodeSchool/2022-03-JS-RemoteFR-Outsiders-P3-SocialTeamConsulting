import React from "react";
import { NavLink } from "react-router-dom";

function NavBarLinks({ handleisMenuVisible }) {
  return (
    <>
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
    </>
  );
}

export default NavBarLinks;
