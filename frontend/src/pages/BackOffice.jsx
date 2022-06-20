import React from "react";
import NavBarBackOffice from "@components/NavBarBackOffice";
import "@style/App.css";
import "@style/BackOffice.css";

function BackOffice() {
  return (
    <div className="arch-backoffice">
      <NavBarBackOffice />
      <div className="app-backoffice-container">
        {/* LES ROUTES SERONT ICI */} ICI S'AFFICHERONT LES PAGES
      </div>
    </div>
  );
}

export default BackOffice;
