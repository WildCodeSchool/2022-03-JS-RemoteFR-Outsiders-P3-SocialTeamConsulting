import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DataLinks from "@services/links.json";
import ExportContext from "../contexts/Context";

function NavBarBackOfficeLinks({
  handleisMenuVisible,
  showLink,
  handleDeconnexion,
}) {
  const { infoUser } = useContext(ExportContext.Context);
  if (infoUser.role === undefined) {
    return <div>Accès interdit !</div>;
  }
  return (
    <>
      {DataLinks.filter((r) => r[infoUser.role]).map((el) => {
        if (el.section === "Déconnexion") {
          return (
            <NavLink to={el.link}>
              <div
                role="button"
                tabIndex={0}
                className="navbar-button"
                onClick={() => {
                  handleDeconnexion();
                  handleisMenuVisible(false);
                  showLink(false);
                }}
              >
                <h2>{el.section}</h2>
              </div>
            </NavLink>
          );
        }
        return (
          <>
            <NavLink to={el.link}>
              <div
                role="button"
                tabIndex={0}
                className="navbar-button"
                onClick={() => {
                  handleisMenuVisible(false);
                  showLink(false);
                }}
              >
                <h2>{el.section}</h2>
              </div>
            </NavLink>
            <hr className="navbar-hr" />
          </>
        );
      })}
    </>
  );
}

export default NavBarBackOfficeLinks;
