import { Link } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../features/pokemonSlice";

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

const StyledImage = styled.img`
  width: auto; /* 카드의 너비에 맞춤 */
  height: 50px; /* 원하는 높이로 고정 */
  object-fit: cover; /* 이미지가 넘칠 경우 잘라냄 */
`;

function PokemonCard({ pokemon, buttonType }) {
  const dispatch = useDispatch();

  const handleAddPokemon = (pokemon) => {
    dispatch(addPokemon(pokemon));
  };

  const handleRemovePokemon = (pokemon) => {
    dispatch(removePokemon(pokemon));
  };

  const handleButtonClick = (e, pokemon) => {
    e.preventDefault();
    e.stopPropagation();
    if (buttonType !== "delete") {
      handleAddPokemon(pokemon);
    } else {
      handleRemovePokemon(pokemon);
    }
  };

  return (
    <StyledCard>
      <Link to={`/detail/${pokemon.id}`} state={{ pokemon }}>
        <StyledImage src={pokemon.img_url} alt={pokemon.korean_name} />
        <h3>{pokemon.korean_name}</h3>
        <p>{"NO." + pokemon.id.toString().padStart(3, "0")}</p>
      </Link>

      <Button
        text={buttonType !== "delete" ? "추가" : "삭제"}
        onClick={(e) => handleButtonClick(e, pokemon)}
      />
    </StyledCard>
  );
}

export default PokemonCard;
