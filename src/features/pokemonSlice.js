import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

// 초기 상태
const initialState = {
  selectedPokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // 포켓몬 추가 액션
    addPokemon: (state, action) => {
      const pokemon = action.payload;

      // 6마리 이상 선택된 경우
      if (state.selectedPokemons.length >= 6) {
        Swal.fire({
          icon: "error",
          text: "포켓몬은 6마리까지 선택 가능합니다.",
          confirmButtonColor: "rgb(185, 23, 23)",
          confirmButtonText: "확인",
        });
        return;
      }

      // 이미 선택된 포켓몬인 경우
      if (
        state.selectedPokemons.some((selected) => selected.id === pokemon.id)
      ) {
        Swal.fire({
          icon: "error",
          text: "이미 선택된 포켓몬입니다.",
          confirmButtonColor: "rgb(185, 23, 23)",
          confirmButtonText: "확인",
        });
        return;
      }

      state.selectedPokemons.push(pokemon);
    },

    // 포켓몬 삭제 액션
    removePokemon: (state, action) => {
      const pokemon = action.payload;
      state.selectedPokemons = state.selectedPokemons.filter(
        (poke) => poke.id !== pokemon.id
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
