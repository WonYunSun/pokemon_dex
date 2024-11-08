import PokemonList from "./PokemonList";
import PokemonSelectList from "./PokemonSelectList";

function Dashboard() {
  return (
    <>
      <PokemonSelectList />
      <PokemonList />
    </>
  );
}

export default Dashboard;
