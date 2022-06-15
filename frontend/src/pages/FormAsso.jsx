import React from "react";
import "@style/Form.css";

export default function FormAsso() {
  // const [associations, setAssociations] = useState({});

  // si la valeur de l'input 1 et egale a la valeur de l'input 2 alors les mdp sont identiques, sinon bloque.
  const handleChange = (e) => {
    e.preventDefault();
  };

  // if (input.id.value === input.id.value) {
  //   console.log("ok");
  // } else {
  //   console.log("not ok");
  // }

  return (
    <div className="register">
      <div className="back">
        <form action="#">
          <div className="register_form">
            <h1>Demande d'inscription pour les associations</h1>
            <div className="box_form">
              <div>
                <label htmlFor="form_asso_name">
                  <p>Nom de votre association</p>
                  <input
                    type="text"
                    id="form_asso_name"
                    required
                    placeholder="ex: ASSOCIATION LES VALLIERES"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="form_asso_email">
                  <p>Email</p>
                  <input
                    type="email"
                    id="form_asso_email"
                    required
                    placeholder="votreemail@gmail.com"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="box_form">
              <div>
                <label htmlFor="form_asso_mdp">
                  <p>Choisir un mot de passe</p>
                  <input
                    type="password"
                    id="form_asso_mdp"
                    required
                    placeholder="********"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="form_asso_mdp2">
                  <p>Retapez votre mot de passe</p>

                  <input
                    type="password"
                    id="form_asso_mdp2"
                    required
                    placeholder="********"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </label>
              </div>
            </div>
            <div className="box_form">
              <div>
                <label htmlFor="form_asso_adresse">
                  <p>Adresse</p>
                  <input
                    type="text"
                    id="form_asso_adresse"
                    required
                    placeholder="3 rue du Limousin"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="form_asso_code_postale">
                  <p>Code Postale</p>
                  <input
                    type="text"
                    id="form_asso_code_postale"
                    required
                    placeholder="33000"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="box_form">
              <div>
                <label htmlFor="form_asso_ville">
                  <p>Ville</p>
                  <input
                    type="text"
                    id="form_asso_ville"
                    required
                    placeholder="Bordeaux"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="form_asso_tel">
                  <p>Téléphone</p>
                  <input
                    type="text"
                    id="form_asso_tel"
                    required
                    placeholder="0772980819"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="form_textarea">
              <label htmlFor="form_message">
                <p>Votre message</p>

                <textarea id="form_message" required onChange={handleChange} />
              </label>
            </div>
            <div className="submit_button">
              <input
                type="submit"
                className="button-blue"
                value="Envoyer la pré-inscription"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
