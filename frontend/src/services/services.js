import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL
  });

const notifySuccess = (message) => {
  toast.success(`Bravo : ${message}`);
};

const notifyError = (message) => {
  toast.error(`Erreur : ${message}`);
};

const authentification = (user, setIsLog) => {
  const ENDPOINT = "/auth";
  api
    .post(ENDPOINT, user)
    .then(() => {
      setIsLog(true);
      notifySuccess("La connection a réussi");
    })
    .catch(() => {
      notifyError(
        "Un problème est survenu lors de votre tentative de connection"
      );
    });
};

export { authentification, notifySuccess, notifyError, api };
