import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [infoUser, setInfoUser] = useState({
    role: localStorage.getItem(`role`),
    email: localStorage.getItem(`email`),
    etat: localStorage.getItem(`etat`),
  });

  return (
    <Context.Provider
      value={{
        infoUser,
        setInfoUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;
