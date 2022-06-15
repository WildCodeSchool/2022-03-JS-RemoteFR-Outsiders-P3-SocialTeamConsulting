import React from "react";
import NavBarBackOfficeDesktop from "@components/NavBarBackOfficeDesktop";
import NavBarBackOfficeMobile from "@components/NavBarBackOfficeMobile";
import "@style/App.css";
import "@style/BackOffice.css";

function BackOffice() {
  return (
    <div className="arch-backoffice">
      <div className="navbar-desktop-backoffice">
        <NavBarBackOfficeDesktop />
      </div>

      <div className="navbar-mobile-backoffice">
        <NavBarBackOfficeMobile />
      </div>
      <div className="app-main-container">
        {/* LES ROUTES SERONT ICI */} ICI S'AFFICHERONT LES PAGES
      </div>
    </div>
  );
}

export default BackOffice;
