import React, { useEffect, useState } from "react";
import { notifySuccess, notifyError, api } from "@services/services";

import "@style/BackOfficeListeUsers.css";

function BackOfficeLectureMessage() {
  const [messages, setMessages] = useState([]);
  const [update, setUpdate] = useState([]);
  const ENDPOINT = "/messages";

  useEffect(() => {
    api.get(ENDPOINT).then((res) => {
      setMessages(res.data);
    });
  }, [update]);

  const handleOnclick = (messageID) => {
    const ENDPOINTCLOSEMESSAGE = `/messages/${messageID}`;
    api
      .put(ENDPOINTCLOSEMESSAGE)
      .then(() => {
        notifySuccess("Message classé");
        setUpdate(!update);
      })
      .catch(() => {
        notifyError("Erreur lors du traitement du message");
      });
  };

  if (messages.length < 1) {
    return <h2>Il n'y a aucun nouveau message</h2>;
  }
  return (
    <>
      <h2>Liste des messages</h2>
      {messages
        .filter((message) => {
          return message.ishandled === 0;
        })
        .map((message) => {
          return (
            <div>
              <h3>{`${message.nom} ${message.prenom}`}</h3>
              <p>{message.message}</p>
              <p>Répondre à : {message.email}</p>
              <button
                type="button"
                className="button-blue"
                onClick={() => handleOnclick(message.id)}
              >
                Classer ce message comme "traité"
              </button>
            </div>
          );
        })}
      <hr className="navbar-hr" />
      <h2>Archive des messages</h2>
      {messages
        .filter((message) => {
          return message.ishandled === 1;
        })
        .map((message) => {
          return (
            <div>
              <h3>{`${message.nom} ${message.prenom}`}</h3>
              <p>{message.message}</p>
              <p>Répondre à : {message.email}</p>
            </div>
          );
        })}
    </>
  );
}

export default BackOfficeLectureMessage;
