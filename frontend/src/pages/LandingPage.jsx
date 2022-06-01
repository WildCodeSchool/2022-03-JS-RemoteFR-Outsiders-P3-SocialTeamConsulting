import React from "react";
import "@style/LandingPage.css";
import img1 from "../assets/img1_plaquete.png";
import img2 from "../assets/img2_plaquete.png";
import img3 from "../assets/img3_plaquete.png";
import img4 from "../assets/img4_plaquete.png";
import img5 from "../assets/img5_plaquete.png";

function LandingPage() {
  return (
    <div className="main-landingpage">
      <header>Social Team Consulting</header>
      <section>
        <h1>{`L'humain plus qu'une priorité`}</h1>
        <img src={img1} alt="l'humain, plus qu'une priorité" />
        <div>
          {`Le développement de Social Team Consulting est fondé sur le respect de
          l'autre et des singularités qui composent notre société. L'humain est
          au cœur des actions portées par nos collaborateurs.`}
          <ul>
            <li> {`Respect de l'autre`}</li>
            <li> {`L'écoute`}</li>
            <li> Adaptation</li>
          </ul>
        </div>
      </section>
      <section>
        <h1>Qui sommes nous ?</h1>
        <img src={img2} alt="Qui sommes nous" />
        <div>
          L’agence est fondée par des professionnel•les issu•es du milieu
          médico-social depuis près de 20 ans. Grâce à la pluralité des profils
          et des structures dirigées, Social Team Consulting saura vous
          accompagner dans vos besoins en personnel les plus spécifiques .
        </div>
      </section>
      <section>
        <h1>Un accompagnement de qualité</h1>
        <img src={img3} alt="un accompagnement de qualité" />
        {`Par son réseau de professionnel•les, Social Team Consulting s’attache à
        assurer une intervention qualitative. Après un diagnostic, une mise en
        relation personnalisée est effectuée avec les collaborateurs de Social
        Team Consulting. Notre volonté est de permettre à chacun de trouver sa
        voie.`}
      </section>
      <section>
        <h1>Nos services</h1>
        <img src={img4} alt="Une spécialité, le médico-social" />
        <div>
          <p>
            {`Une équipe spécialisée au service du secteur social et
            médico-social. Une mise en relation avec des intervenants aux
            compétences variées : accueillante, technicien•ne d’intervention
            sociale et familiale, éducation spécialisée, moniteur éducateur,
            CESF, Assistante de Service Sociale, animateur…`}
          </p>
          <p>Intervention dans toute l’Île-de-France</p>
        </div>
      </section>
      <img src={img5} alt="Une spécialité, le médico-social" />
      <p>
        {`Une éthique sociale et une efficacité économique au service de l’intérêt
        général.`}
      </p>
    </div>
  );
}

export default LandingPage;
