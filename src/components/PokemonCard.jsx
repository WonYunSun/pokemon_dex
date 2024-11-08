import { Link } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import { useContext } from "react";
import PokemonContext from "../context/PokemonContext"; // Context import

const scaleAnimation = `
  @keyframes scaleUpDown {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }
`;

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
    animation: scaleUpDown 0.6s ease-in-out infinite;
  }
  ${scaleAnimation}
`;

function PokemonCard({ pokemon, buttonType }) {
  const { handleSelectPokemon, handleRemovePokemon } =
    useContext(PokemonContext);

  return (
    <Link to={`/detail/${pokemon.id}`} state={{ pokemon }}>
      <StyledCard>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h3>{pokemon.korean_name}</h3>
        <p>{"NO." + pokemon.id.toString().padStart(3, "0")}</p>

        {buttonType !== "delete" ? (
          <Button
            text={"추가"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSelectPokemon(pokemon);
            }}
          />
        ) : (
          <Button
            text={"삭제"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleRemovePokemon(pokemon);
            }}
          />
        )}
      </StyledCard>
    </Link>
  );
}

export default PokemonCard;
