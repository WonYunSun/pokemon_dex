import Button from "./Button";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 5px solid #bababa;
  background-color: #8a8a8a;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    border-color: #c73625;
    background-color: #bababa;
  }
`;

function PokemonCard({ pokemon }) {
  return (
    <StyledCard>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <p>{"NO." + pokemon.id.toString().padStart(3, "0")}</p>
      <Button text={"추가"}></Button>
    </StyledCard>
  );
}

export default PokemonCard;
