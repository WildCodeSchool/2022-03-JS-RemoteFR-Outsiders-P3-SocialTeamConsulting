import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ExportContext from "./contexts/Context";

ReactDOM.render(
  <BrowserRouter>
    <ExportContext.Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ExportContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
