import { Link } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";

const scaleAnimation = `
  @keyframes scaleUpDown {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03); /* 커짐 */
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
    animation: scaleUpDown 0.6s ease-in-out infinite; /* 애니메이션 반복 */
  }
  /* 애니메이션 추가 */
  ${scaleAnimation}
`;

function PokemonCard({ pokemon, onSelectPokemon, onRemovePokemon }) {
  return (
    <Link to={`/detail/${pokemon.id}`} state={{ pokemon }}>
      <StyledCard>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h3>{pokemon.korean_name}</h3>
        <p>{"NO." + pokemon.id.toString().padStart(3, "0")}</p>
        {onSelectPokemon ? (
          <Button
            text={"추가"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); // Link 이벤트 막기
              onSelectPokemon(pokemon);
            }}
          />
        ) : (
          <Button
            text={"삭제"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); // Link 이벤트 막기
              onRemovePokemon(pokemon);
            }}
          />
        )}
      </StyledCard>
    </Link>
  );
}

export default PokemonCard;
