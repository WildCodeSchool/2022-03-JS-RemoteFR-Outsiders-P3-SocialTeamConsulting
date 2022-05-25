import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";

import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

import "./style/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
