import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../features/pokemonSlice";

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
});

export default store;
