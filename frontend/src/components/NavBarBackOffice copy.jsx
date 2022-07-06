import logo from "@assets/SocialTeamConsultingLogo.ico";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";

import NavBarBackOfficeLinks from "@components/NavBarBackOfficeLinks";

import genericavatar from "@assets/genericavatar.png";

import DataLinks from "@services/links.json";
import ExportContext from "../contexts/Context";

import "@style/BackOffice.css";
import "@style/NavBar.css";

function NavBarBackOffice() {
  const { infoUser, setInfoUser } = useContext(ExportContext.Context);
  console.warn(setInfoUser);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleisMenuVisible = (isVisible) => {
    setIsMenuVisible(isVisible);
  };
  const navigate = useNavigate();

  if (infoUser.role === undefined) {
    return <div>No way !</div>;
  }

  if (infoUser.role === "association") {
    return (
      <div>
        <div className="navbar-desktop-backoffice">
          <div className="nav-part-one">
            <div className="navbar-desk-logo">
              <img
                className="navbar-logo"
                src={logo}
                alt="logo de la Social Team Consulting"
                onClick={() => navigate("/back_office")}
              />
              <h1>Social Team Consulting</h1>
            </div>
            <div className="navbar-desk-img-profile">
              <img src={genericavatar} alt="profile" />
            </div>
            <div className="navbar-desk-name">
              <h1>Laura Dupond</h1>
            </div>
          </div>

          <div className="nav-part-two">
            {DataLinks.filter((r) => r.association).map((el) => (
              <div>
                <ul>
                  <NavLink to={el.link}>
                    <div role="button" tabIndex={0} className="navbar-button">
                      <li className="navbar-li_highlight">
                        <h2>{el.section}</h2>
                      </li>
                    </div>
                  </NavLink>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="navbar-mobile-backoffice">
          <div className="fixed">
            <nav
              className={`${
                isMenuVisible ? "navbar-visible" : "navbar-hidden"
              }`}
            >
              <div className="navbar-div_logo">
                <img
                  className="navbar-logo"
                  src={logo}
                  alt="logo de la Social Team Consulting"
                  onClick={() => navigate("/back_office")}
                />
              </div>
              <h1 className="title">Social Team Consulting</h1>
              <div
                className="navbar-burger"
                role="button"
                onClick={() => {
                  handleisMenuVisible(!isMenuVisible);
                }}
                tabIndex={0}
              >
                <span className="navbar-bar" />
              </div>

              <div className="navbar-menu_wrapper">
                <hr className="navbar-hr" />
                <NavBarBackOfficeLinks
                  handleisMenuVisible={handleisMenuVisible}
                />
              </div>
            </nav>
            <hr className="navbar-bottom-hr" />
            <div className="navbar-header">
              <hr className="navbar-bottom-hr" />
              <div className="profile-desc">
                <div className="profile-desc-picture">
                  <img
                    className="avatarprofilimg"
                    src={genericavatar}
                    alt="profile"
                  />
                </div>
                <div className="profile-desc-name">
                  <h2>Laura Dupont</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (infoUser.role === "intervenant") {
    return (
      <div>
        <div className="navbar-desktop-backoffice">
          <div className="nav-part-one">
            <div className="navbar-desk-logo">
              <img
                className="navbar-logo"
                src={logo}
                alt="logo de la Social Team Consulting"
                onClick={() => navigate("/back_office")}
              />
              <h1>Social Team Consulting</h1>
            </div>
            <div className="navbar-desk-img-profile">
              <img src={genericavatar} alt="profile" />
            </div>
            <div className="navbar-desk-name">
              <h1>Laura Dupond</h1>
            </div>
          </div>

          <div className="nav-part-two">
            {DataLinks.filter((r) => !r.association).map((el) => (
              <div>
                <ul>
                  <NavLink to={el.link}>
                    <div role="button" tabIndex={0} className="navbar-button">
                      <li className="navbar-li_highlight">
                        <h2>{el.section}</h2>
                      </li>
                    </div>
                  </NavLink>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="navbar-mobile-backoffice">
          <div className="fixed">
            <nav
              className={`${
                isMenuVisible ? "navbar-visible" : "navbar-hidden"
              }`}
            >
              <div className="navbar-div_logo">
                <img
                  className="navbar-logo"
                  src={logo}
                  alt="logo de la Social Team Consulting"
                  onClick={() => navigate("/back_office")}
                />
              </div>
              <h1 className="title">Social Team Consulting</h1>
              <div
                className="navbar-burger"
                role="button"
                onClick={() => {
                  handleisMenuVisible(!isMenuVisible);
                }}
                tabIndex={0}
              >
                <span className="navbar-bar" />
              </div>

              <div className="navbar-menu_wrapper">
                <hr className="navbar-hr" />
                <NavBarBackOfficeLinks
                  handleisMenuVisible={handleisMenuVisible}
                />
              </div>
            </nav>
            <hr className="navbar-bottom-hr" />
            <div className="navbar-header">
              <hr className="navbar-bottom-hr" />
              <div className="profile-desc">
                <div className="profile-desc-picture">
                  <img
                    className="avatarprofilimg"
                    src={genericavatar}
                    alt="profile"
                  />
                </div>
                <div className="profile-desc-name">
                  <h2>Laura Dupont</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (infoUser.role !== "association" && infoUser.role !== "intervenant") {
    return (
      <div>
        <div className="navbar-desktop-backoffice">
          <div className="nav-part-one">
            <div className="navbar-desk-logo">
              <img
                className="navbar-logo"
                src={logo}
                alt="logo de la Social Team Consulting"
                onClick={() => navigate("/back_office")}
              />
              <h1>Social Team Consulting</h1>
            </div>
            <div className="navbar-desk-img-profile">
              <img src={genericavatar} alt="profile" />
            </div>
            <div className="navbar-desk-name">
              <h1>Laura Dupond</h1>
            </div>
          </div>

          <div className="nav-part-two">
            {DataLinks.map((el) => (
              <div>
                <ul>
                  <NavLink to={el.link}>
                    <div role="button" tabIndex={0} className="navbar-button">
                      <li className="navbar-li_highlight">
                        <h2>{el.section}</h2>
                      </li>
                    </div>
                  </NavLink>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="navbar-mobile-backoffice">
          <div className="fixed">
            <nav
              className={`${
                isMenuVisible ? "navbar-visible" : "navbar-hidden"
              }`}
            >
              <div className="navbar-div_logo">
                <img
                  className="navbar-logo"
                  src={logo}
                  alt="logo de la Social Team Consulting"
                  onClick={() => navigate("/back_office")}
                />
              </div>
              <h1 className="title">Social Team Consulting</h1>
              <div
                className="navbar-burger"
                role="button"
                onClick={() => {
                  handleisMenuVisible(!isMenuVisible);
                }}
                tabIndex={0}
              >
                <span className="navbar-bar" />
              </div>

              <div className="navbar-menu_wrapper">
                <hr className="navbar-hr" />
                <NavBarBackOfficeLinks
                  handleisMenuVisible={handleisMenuVisible}
                />
              </div>
            </nav>
            <hr className="navbar-bottom-hr" />
            <div className="navbar-header">
              <hr className="navbar-bottom-hr" />
              <div className="profile-desc">
                <div className="profile-desc-picture">
                  <img
                    className="avatarprofilimg"
                    src={genericavatar}
                    alt="profile"
                  />
                </div>
                <div className="profile-desc-name">
                  <h2>Laura Dupont</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarBackOffice;
