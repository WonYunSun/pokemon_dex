import "./App.css";
import GlobalStyles from "./Globalstyles.js";
import Router from "./shared/Router";
import MOCK_DATA from "../src/data/PokemonMockData.js";
import { PokemonProvider } from "./context/PokemonContext.jsx";

function App() {
  return (
    <PokemonProvider>
      {/* 글로벌 폰트 적용 */}
      <GlobalStyles />
      <Router mockData={MOCK_DATA} />
    </PokemonProvider>
  );
}

export default App;
