import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";

import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import LandingPage from "@pages/LandingPage";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

import "@style/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-main-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
