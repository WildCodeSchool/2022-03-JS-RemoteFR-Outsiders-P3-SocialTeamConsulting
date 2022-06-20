import React from "react";

import NavBarBackOffice from "@components/NavBarBackOffice";
import ProfilInterv from "@components/ProfilInterv";

import "@style/App.css";
import "@style/BackOffice.css";

function BackOffice() {
  return (
    <div className="arch-backoffice">
      <NavBarBackOffice />
      <div className="app-backoffice-container">
        <ProfilInterv />
      </div>
    </div>
  );
}

export default BackOffice;
