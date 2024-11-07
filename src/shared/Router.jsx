import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import MOCK_DATA from "../data/PokemonMockData";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dex" element={<Dex mockData={MOCK_DATA}></Dex>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
