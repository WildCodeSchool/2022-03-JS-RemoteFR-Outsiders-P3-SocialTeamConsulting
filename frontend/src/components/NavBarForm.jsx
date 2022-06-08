import React from "react";

function NavBarForm({ showForm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form action="" method="post" className="navbar-form_members">
      <legend className="navbar-legend">Déjà membre</legend>
      <div className="form-example">
        <label htmlFor="email">
          <p>Email :</p>
          <input
            type="email"
            name="email"
            id="email"
            required
            onClick={() => showForm(true)}
          />
        </label>
      </div>
      <div className="form-example">
        <label htmlFor="mdp">
          <p>Mot de passe :</p>
          <input type="password" name="password" id="password" required />
        </label>
      </div>
      <div className="form-example">
        <input
          className="button-blue navbar-input"
          type="submit"
          value="Se connecter"
          onClick={(e) => {
            handleSubmit(e);
            showForm(false);
          }}
        />
      </div>
    </form>
  );
}

export default NavBarForm;
