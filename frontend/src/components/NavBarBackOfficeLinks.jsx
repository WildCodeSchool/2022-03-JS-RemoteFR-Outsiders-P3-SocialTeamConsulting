import React from "react";
import { NavLink } from "react-router-dom";
import DataLinksIntervenants from "@services/linksIntervenants.json";

function NavBarBackOfficeLinks({ handleisMenuVisible, showLink }) {
  return (
    <>
      {DataLinksIntervenants.map((el) => (
        <React.Fragment key={el.id}>
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
        </React.Fragment>
      ))}
    </>
  );
}

export default NavBarBackOfficeLinks;
