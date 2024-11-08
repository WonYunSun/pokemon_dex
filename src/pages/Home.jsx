import { styled } from "styled-components";
import Button from "./../components/Button";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const LogoImg = styled.div`
  width: 600px; // 이미지의 너비
  height: 220px;
  background-image: url("/assets/pokemon-logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20px;
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <LogoImg></LogoImg>
      <Button
        fontSize="18px"
        text="포켓몬 도감 시작하기"
        onClick={() => {
          navigate("/dex");
        }}
      ></Button>
    </HomeContainer>
  );
}
