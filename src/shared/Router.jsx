import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";

export default function Router({
  mockData,
  selectedPokemon,
  onSelectPokemon,
  onRemovePokemon,
}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/dex"
          element={
            <Dex
              mockData={mockData}
              selectedPokemon={selectedPokemon}
              onSelectPokemon={onSelectPokemon}
              onRemovePokemon={onRemovePokemon}
            ></Dex>
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
