import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyCarousel from "./components/MyCarousel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsNew from "./components/DetailsNew";
import News from "./components/News";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <div className="App bg-img ">
        <Routes>
          <Route path="/" element={<MyCarousel />} />
          <Route path="/new/:id" element={<DetailsNew />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
