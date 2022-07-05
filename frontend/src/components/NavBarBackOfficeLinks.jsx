import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DataLinksIntervenants from "@services/linksIntervenants.json";
import ExportContext from "../contexts/Context";

function NavBarBackOfficeLinks({ handleisMenuVisible, showLink }) {
  const { infoUser, setInfoUser } = useContext(ExportContext.Context);
  console.warn(setInfoUser);
  if (infoUser.role === undefined) {
    return <div>Accès interdit !</div>;
  }
  return (
    <div>
      {DataLinksIntervenants.filter((r) => r[infoUser.role]).map((el) => (
        <div>
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
        </div>
      ))}
    </div>
  );
}

export default NavBarBackOfficeLinks;
