import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
import Fiche from "./Components/Productpage/Productpage";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer'

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Fiche />}/>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
