import PokemonCard from "./PokemonCard";
import styled from "styled-components";
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

function PokemonList({ mockData, onSelectPokemon }) {
  return (
    <StyledPokemonList>
      {mockData.map((pokemon, i) => (
        <PokemonCard
          key={i}
          pokemon={pokemon}
          onSelectPokemon={onSelectPokemon}
        />
      ))}
    </StyledPokemonList>
  );
}

export default PokemonList;
