import axios from "axios";
import { toast } from "react-toastify";

const authentification = (user, setIsLog) => {
  const notifySuccess = (data) => {
    toast.success(`Bravo : ${data.message}`);
  };

  const notifyError = (data) => {
    toast.error(`Erreur : ${data.message}`);
  };

  const ENDPOINT = "http://localhost:5000/auth";
  axios
    .post(ENDPOINT, user)
    .then((res) => {
      setIsLog(true);
      notifySuccess(res.data);
    })
    .catch((err) => {
      notifyError(err.data);
    });
};

export default authentification;
