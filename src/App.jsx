import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import ConcertPage from "./page/ConcertPage";
import BuyTicketsPage from "./page/BuyTicketsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/concert" element={<ConcertPage />} />
        <Route path="/buy-tickets" element={<BuyTicketsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
