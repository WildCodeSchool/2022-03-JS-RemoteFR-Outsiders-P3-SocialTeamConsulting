import axios from "axios";
import { toast } from "react-toastify";

const notifySuccess = (message) => {
  toast.success(`Bravo : ${message}`);
};

const notifyError = (message) => {
  toast.error(`Erreur : ${message}`);
};

const authentification = (user, setIsLog) => {
  const ENDPOINT = "http://localhost:5000/auth";
  axios
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

export { authentification, notifySuccess, notifyError };
