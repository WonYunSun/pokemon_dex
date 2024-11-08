import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import MOCK_DATA from "../data/PokemonMockData"; // MOCK_DATA 직접 import

const StyledPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: #352e3e;
  padding: 20px;
  border: 5px solid #c73625;
  border-radius: 10px;
  color: #292929;
`;

function PokemonList() {
  return (
    <StyledPokemonList>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </StyledPokemonList>
  );
}

export default PokemonList;
