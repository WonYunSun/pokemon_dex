import "./App.css";
import { useState } from "react";
import Router from "./shared/Router";
import GlobalStyles from "./Globalstyles.js";
import MOCK_DATA from "../src/data/PokemonMockData.js";
import Swal from "sweetalert2";
function App() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(
      //함수형 업데이트 방식. 자동으로 그 함수의 첫번째 인자로 현재 상태 값 넘김
      (prevList) => {
        if (prevList.length >= 6) {
          //6마리까지만 포켓몬을 받음
          Swal.fire({
            icon: "error",
            text: "포켓몬은 6마리까지 선택 가능합니다.",
            confirmButtonColor: "rgb(185, 23, 23)",
            confirmButtonText: "확인",
          });
          return prevList;
        }
        if (
          // 중복되면
          prevList.some((selected) => selected.id === pokemon.id)
        ) {
          Swal.fire({
            icon: "error",
            text: "이미 선택된 포켓몬입니다.",
            confirmButtonColor: "rgb(185, 23, 23)",
            confirmButtonText: "확인",
          });
          return prevList;
        }
        return [...prevList, pokemon];
      }
    );
  };

  const handleRemovePokemon = (pokemon) => {
    setSelectedPokemon((prevList) => {
      return prevList.filter((selected) => selected.id !== pokemon.id);
    });
  };
  return (
    <>
      {/* 글로벌 폰트 적용 */}
      <GlobalStyles />
      <Router
        mockData={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        onSelectPokemon={handleSelectPokemon}
        onRemovePokemon={handleRemovePokemon}
      ></Router>
    </>
  );
}

export default App;
