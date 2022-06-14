import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import BackOffice from "@pages/BackOffice";

import "@style/App.css";

function App() {
  return (
    <Routes>
      <Route path="/BackOffice" element={<BackOffice />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
