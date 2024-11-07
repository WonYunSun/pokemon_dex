import { styled } from "styled-components";
const StyledPokemonSelectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #352e3e;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 5px solid #c73625;
`;
const PokeBallsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
  background-image: url("src/assets/pokemon-favicon.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function PokemonSelectList() {
  const pokemonsList = Array(6).fill(null);
  return (
    <StyledPokemonSelectList>
      <h2>나만의 포켓몬</h2>
      <PokeBallsWrapper>
        {pokemonsList.map((_, i) => {
          return <EmptyBox key={i} />;
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
