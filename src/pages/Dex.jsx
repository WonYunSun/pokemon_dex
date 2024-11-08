import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const StyledDexContainer = styled.div`
  margin: 20px;
`;
export default function Dex({
  mockData,
  selectedPokemon,
  onSelectPokemon,
  onRemovePokemon,
}) {
  return (
    <StyledDexContainer>
      <Dashboard
        mockData={mockData}
        selectedPokemon={selectedPokemon}
        onSelectPokemon={onSelectPokemon}
        onRemovePokemon={onRemovePokemon}
      />
    </StyledDexContainer>
  );
}
