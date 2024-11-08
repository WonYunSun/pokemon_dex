import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
const StyledDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  height: 100vh; /* 화면 전체 높이 */
  align-items: center;
  padding: 20px;
  gap: 20px;

  button {
    margin: 20px 0;
  }
`;

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const pokemon = location.state?.pokemon;
  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  if (!pokemon) return <p>포켓몬 데이터를 찾을 수 없습니다.</p>;

  return (
    <StyledDetailContainer>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입 : {pokemon.types.join(" , ")}</p>
      <p>{pokemon.description}</p>
      <Button text={"뒤로 가기"} onClick={handleBackClick}></Button>
    </StyledDetailContainer>
  );
}

export default Detail;
