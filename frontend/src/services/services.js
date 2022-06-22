import React, { useContext } from "react";
import ExportContext from "../contexts/Context";
import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const notifySuccess = (message) => {
  toast.success(`Bravo : ${message}`);
};

const notifyError = (message) => {
  toast.error(`Erreur : ${message}`);
};

const authentification = (user, setIsLog, setInfoUser, infoUser) => {
  const ENDPOINT = "/auth";
  api
    .post(ENDPOINT, user)
    .then((response) => {
      setInfoUser({
        role: response.data.role,
        email: response.data.email,
        etat: response.data.etat,
      });
      setIsLog(true);
      notifySuccess("La connection a réussi");
      console.log(infoUser);
    })
    .catch(() => {
      notifyError(
        "Un problème est survenu lors de votre tentative de connection"
      );
    });
};

export { authentification, notifySuccess, notifyError, api };
