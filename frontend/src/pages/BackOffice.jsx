import React from "react";

import NavBarBackOffice from "@components/NavBarBackOffice";

import "@style/App.css";
import "@style/BackOffice.css";
import { Outlet } from "react-router-dom";

function BackOffice() {
  return (
    <div className="arch-backoffice">
      <NavBarBackOffice />
      <div className="app-backoffice-container">
        <Outlet />
      </div>
    </div>
  );
}

export default BackOffice;
