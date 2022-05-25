import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [example, setExample] = useState("");

  useEffect(() => {
    setExample("test");
  }, [example]);
  return (
    <Context.Provider
      value={{
        example,
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
