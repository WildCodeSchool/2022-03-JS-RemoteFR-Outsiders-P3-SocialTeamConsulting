import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "@pages/Home";
import BackOffice from "@pages/BackOffice";

import "@style/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/BackOffice" element={<BackOffice />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
