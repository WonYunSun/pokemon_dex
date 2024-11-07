import PokemonList from "./PokemonList";
import PokemonSelectList from "./PokemonSelectList";

function Dashboard({ mockData }) {
  return (
    <>
      <PokemonSelectList />
      <PokemonList mockData={mockData} />
    </>
  );
}

export default Dashboard;
