import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { authentification } from "@services/services";

function NavBarForm({ showForm }) {
  const [isLog, setIsLog] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    authentification(user, setIsLog);
  };

  React.useEffect(() => {
    if (isLog) {
      navigate("/page1");
    } else {
      navigate("/home");
    }
  }, [isLog]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      action=""
      method="post"
      className="navbar-form_members"
      onSubmit={handleSubmit}
    >
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
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-example">
        <label htmlFor="mdp">
          <p>Mot de passe :</p>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-example">
        <button className="button-blue navbar-input" type="submit">
          Se connecter
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default NavBarForm;
