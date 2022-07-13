import React from "react";

import { FaPhoneAlt, FaRegEnvelope, FaHeart } from "react-icons/fa";
import { BiCookie } from "react-icons/bi";

import "@style/Footer.css";
import MissionSynthesis from "./MissionSynthesis";

function Footer() {
  return (
    <footer>
      <hr className="footer-hr" />
      <div className="footer-text">
        <div className="footer-bloc">
          <h2 className="footer-toogle-title">A propos de nous :</h2>
          <p>SARL Social Team Consulting</p>
          <p>22 rue de Varsovie 93140 BONDY</p>
          <p>SIRET 90267259100010</p>
        </div>
        <div className="footer-bloc">
          <h2>Nous contacter :</h2>
          <div>
            <div className="footer-contact">
              <FaPhoneAlt className="footer-middle-icon" /> : 07 50 08 55 21
            </div>
            <div className="footer-contact">
              <FaRegEnvelope className="footer-middle-icon" /> :&nbsp;
              <a href="mailto: secretariat@socialteamconsulting.org">
                secretariat@socialteamconsulting.org
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="wildcodeschool">
        Développé avec <FaHeart className="red footer-middle-icon" /> par&nbsp;
        <a
          href="https://www.wildcodeschool.com"
          target="_blank"
          rel="noreferrer"
        >
          les Wilders
        </a>
      </p>
      <p className="cookie">
        <BiCookie />
        {` Pour son bon fonctionnement, ce site requiert l'utilisation de cookies en nombre limité `}
        <BiCookie />
      </p>
    </footer>
  );
}

export default Footer;
