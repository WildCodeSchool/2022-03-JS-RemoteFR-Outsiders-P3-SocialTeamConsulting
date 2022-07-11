import React from "react";
import { NavLink } from "react-router-dom";

function NavBarLinks({
  handleisMenuVisible,
  showLink,
  isLogInVisible,
  navigate,
}) {
  return (
    <>
      {isLogInVisible ? (
        <>
          <div
            role="button"
            tabIndex={0}
            onClick={() => navigate("/back_office")}
          >
            <h2>Accès au Tableau de bord</h2>
          </div>
          <hr className="navbar-hr" />
        </>
      ) : (
        ""
      )}
      <NavLink to="/accueil_intervenant">
        <div
          role="button"
          tabIndex={0}
          className="navbar-button"
          onClick={() => {
            handleisMenuVisible(false);
            showLink(false);
          }}
        >
          <h2>Vous êtes un intervenant</h2>
        </div>
      </NavLink>
      <hr className="navbar-hr" />
      <NavLink to="/accueil_association">
        <div
          role="button"
          tabIndex={0}
          className="navbar-button"
          onClick={() => {
            handleisMenuVisible(false);
            showLink(false);
          }}
        >
          <h2>Vous êtes une association</h2>
        </div>
      </NavLink>
    </>
  );
}

export default NavBarLinks;
