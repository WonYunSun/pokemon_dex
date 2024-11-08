import PokemonList from "./PokemonList";
import PokemonSelectList from "./PokemonSelectList";

function Dashboard({
  mockData,
  selectedPokemon,
  onSelectPokemon,
  onRemovePokemon,
}) {
  return (
    <>
      <PokemonSelectList
        selectedPokemon={selectedPokemon}
        onRemovePokemon={onRemovePokemon}
      />
      <PokemonList mockData={mockData} onSelectPokemon={onSelectPokemon} />
    </>
  );
}

export default Dashboard;
