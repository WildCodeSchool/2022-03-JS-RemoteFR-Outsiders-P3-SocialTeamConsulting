import React, { useEffect, useState } from "react";
import { notifySuccess, notifyError, api } from "@services/services";
import mapMessages from "@components/BackOfficeLectureMessage-map";

import "@style/BackOfficeLectureMessage.css";

function BackOfficeLectureMessage() {
  const [messages, setMessages] = useState([]);
  const [update, setUpdate] = useState([]);
  const ENDPOINT = "/messages";

  // Récupère l'ensemble des messages de la base de donnée
  useEffect(() => {
    api.get(ENDPOINT).then((res) => {
      setMessages(res.data);
    });
  }, [update]);

  // Passe le message en "terminé"
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
      <h2 className="lecture-titre">Liste des messages</h2>
      {messages
        .filter((message) => {
          return message.ishandled === 0;
        })
        .map((message) => {
          return mapMessages(message, handleOnclick);
        })}
      <hr className="lecture-hr" />
      <h2 className="lecture-titre">Archive des messages</h2>
      {messages
        .filter((message) => {
          return message.ishandled === 1;
        })
        .map((message) => {
          // closed permet de masquer le bouton de traitement du message
          const closed = true;
          return mapMessages(message, handleOnclick, closed);
        })}
    </>
  );
}

export default BackOfficeLectureMessage;
