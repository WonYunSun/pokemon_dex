import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const StyledDexContainer = styled.div`
  margin: 20px;
`;
export default function Dex() {
  return (
    <StyledDexContainer>
      <Dashboard />
    </StyledDexContainer>
  );
}
