import React from "react";
import "@style/LandingPage.css";
import img1 from "../assets/img1_plaquete.png";
import img2 from "../assets/img2_plaquete.png";
import img3 from "../assets/img3_plaquete.png";

function LandingPage() {
  return (
    <div className="main-landingpage">
      <header>
        <h1>{`L'humain plus qu'une priorité`}</h1>
      </header>
      <section id="services">
        <h1>Nos services</h1>
        <div className="section-inner-content">
          <div>
            <div className="argumentaire">
              <ul className="list">
                <li>
                  {`Une équipe `}
                  <span>spécialisée</span> {`au service du secteur `}
                  <span>social</span> {` et `}
                  <span>médico-social</span>{" "}
                  {`
            .`}
                </li>
                <li>
                  {`Une `}
                  <span>mise en relation</span>{" "}
                  {` avec des intervenants aux
            `}
                  <span>compétences variée</span>{" "}
                  {` : accueillante, technicien•ne d’intervention
            sociale et familiale, éducation spécialisée, moniteur éducateur,
            CESF, Assistante de Service Sociale, animateur…`}
                </li>
                <li>
                  Intervention dans <span>toute l’Île-de-France</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1>Un accompagnement de qualité</h1>
        <div className="regular-section" id="even_section">
          <img
            src={img3}
            alt="un accompagnement de qualité"
            className="img3 img"
          />
          <div>
            {`Par son réseau de professionnel•les, Social Team Consulting s’attache à
        assurer une `}
            <span>intervention qualitative</span>
            {`. Après un diagnostic, une mise en
        relation `}
            <span>personnalisée</span>
            {` est effectuée `}
            <span>avec les collaborateurs</span>
            {` de Social
        Team Consulting. Notre volonté est de permettre à chacun de trouver sa
        voie.`}
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>{`L'humain, plus qu'une priorité`}</h1>
          <div className="regular-section">
            <img
              src={img1}
              alt="l humain, plus qu une priorité"
              className="img1 img"
            />
            <div>
              {`Le développement de Social Team Consulting est fondé sur le `}
              <span>{`respect de l'autre`}</span>
              {` et des singularités qui composent notre société. L'humain est
          `}
              <span>au cœur</span>
              {` des actions portées par nos collaborateurs.`}
              <ul className="list">
                <li> {`Respect de l'autre`}</li>
                <li> {`L'écoute`}</li>
                <li> Adaptation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1>Qui sommes nous ?</h1>
        <div className="regular-section" id="even_section">
          <img src={img2} alt="Qui sommes nous" className="img2 img" />
          <div>
            L’agence est fondée par des professionnel•les issu•es du
            <span>milieu médico-social</span> depuis près de <span>20 ans</span>
            . Grâce à la pluralité des profils et des structures dirigées,
            Social Team Consulting saura <span>vous accompagner</span> dans vos
            besoins en personnel les plus spécifiques .
          </div>
        </div>
      </section>
      <section className="quote">
        {`Une éthique sociale et une efficacité économique au service de l'intérêt général.`}
      </section>
    </div>
  );
}

export default LandingPage;
