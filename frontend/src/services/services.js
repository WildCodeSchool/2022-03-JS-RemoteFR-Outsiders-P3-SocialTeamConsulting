import axios from "axios";
import { toast } from "react-toastify";

const notifySuccess = () => {
  toast.success(`Bravo : connecté`);
};

const notifyError = () => {
  toast.error(`Erreur : problème de connection`);
};

const authentification = (user, setIsLog) => {
  const ENDPOINT = "http://localhost:5000/auth";
  axios
    .post(ENDPOINT, user)
    .then(() => {
      setIsLog(true);
      notifySuccess();
    })
    .catch(() => {
      notifyError();
    });
};

export { authentification, notifySuccess, notifyError };
