import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DataLinksIntervenants from "@services/linksIntervenants.json";
import ExportContext from "../contexts/Context";

function NavBarBackOfficeLinks({ handleisMenuVisible, showLink }) {
  const { infoUser, setInfoUser } = useContext(ExportContext.Context);
  console.warn(setInfoUser);
  if (infoUser.role === undefined) {
    return <div>No way !</div>;
  }
  if (infoUser.role === "association") {
    return (
      <div>
        <h1>TEST</h1>
        {DataLinksIntervenants.filter((r) => r.association).map((l) => {
          return (
            <div>
              <NavLink to={l.link}>
                <div
                  role="button"
                  tabIndex={0}
                  className="navbar-button"
                  onClick={() => {
                    handleisMenuVisible(false);
                    showLink(false);
                  }}
                >
                  <h2>{l.section}</h2>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
  if (infoUser.role === "intervenant") {
    return (
      <div>
        <h1>TEST</h1>
        {DataLinksIntervenants.filter((r) => !r.association).map((l) => {
          return (
            <div>
              <NavLink to={l.link}>
                <div
                  role="button"
                  tabIndex={0}
                  className="navbar-button"
                  onClick={() => {
                    handleisMenuVisible(false);
                    showLink(false);
                  }}
                >
                  <h2>{l.section}</h2>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
  if (infoUser.role !== "association" && infoUser.role !== "intervenant") {
    return (
      <div>
        <h1>TEST</h1>
        {DataLinksIntervenants.map((l) => {
          return (
            <div>
              <NavLink to={l.link}>
                <div
                  role="button"
                  tabIndex={0}
                  className="navbar-button"
                  onClick={() => {
                    handleisMenuVisible(false);
                    showLink(false);
                  }}
                >
                  <h2>{l.section}</h2>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NavBarBackOfficeLinks;
