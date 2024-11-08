import { useContext } from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import PokemonContext from "../context/PokemonContext"; // Context import

const StyledPokemonSelectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #352e3e;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 5px solid #c73625;

  h2 {
    padding: 0 0 20px 0;
  }
`;

const PokeBallsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const PokeBallWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #9a9a9a;
  border: 5px dashed #bababa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const PokeBall = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("/assets/pokemon-favicon.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function PokemonSelectList() {
  const { selectedPokemon } = useContext(PokemonContext); // onRemovePokemon을 사용할 필요 없음

  const pokemonsList = Array(6).fill(null);
  return (
    <StyledPokemonSelectList>
      <h2>포켓몬을 선택하세요</h2>
      <PokeBallsWrapper>
        {pokemonsList.map((_, i) => {
          return selectedPokemon[i] ? (
            <PokemonCard
              key={i}
              pokemon={selectedPokemon[i]}
              buttonType={"delete"}
            />
          ) : (
            <EmptyBox key={i} />
          );
        })}
      </PokeBallsWrapper>
    </StyledPokemonSelectList>
  );
}

const EmptyBox = () => {
  return (
    <PokeBallWrapper>
      <PokeBall></PokeBall>
    </PokeBallWrapper>
  );
};
