import { createContext, useState } from "react";
import Swal from "sweetalert2";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon((prevList) => {
      if (prevList.length >= 6) {
        Swal.fire({
          icon: "error",
          text: "포켓몬은 6마리까지 선택 가능합니다.",
          confirmButtonColor: "rgb(185, 23, 23)",
          confirmButtonText: "확인",
        });
        return prevList;
      }
      if (prevList.some((selected) => selected.id === pokemon.id)) {
        Swal.fire({
          icon: "error",
          text: "이미 선택된 포켓몬입니다.",
          confirmButtonColor: "rgb(185, 23, 23)",
          confirmButtonText: "확인",
        });
        return prevList;
      }
      return [...prevList, pokemon];
    });
  };

  const handleRemovePokemon = (pokemon) => {
    setSelectedPokemon((prevList) =>
      prevList.filter((selected) => selected.id !== pokemon.id)
    );
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, handleSelectPokemon, handleRemovePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
