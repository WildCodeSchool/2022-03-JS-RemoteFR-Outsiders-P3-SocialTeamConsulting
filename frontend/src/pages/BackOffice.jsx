import React, { useContext } from "react";

import NavBarBackOffice from "@components/NavBarBackOffice";
import "@style/App.css";
import "@style/BackOffice.css";
import { Outlet } from "react-router-dom";

import ExportContext from "../contexts/Context";
import ModifProfil from "./ModifProfil";

function BackOffice() {
  const { infoUser } = useContext(ExportContext.Context);
  return (
    <div className="arch-backoffice">
      <NavBarBackOffice />
      <div className="app-backoffice-container">
        {infoUser.role === "administrateur" ||
        infoUser.etat !== "pré-inscrit" ? (
          <Outlet />
        ) : (
          <ModifProfil />
        )}
      </div>
    </div>
  );
}

export default BackOffice;
