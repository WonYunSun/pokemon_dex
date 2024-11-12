import "./App.css";
import GlobalStyles from "./Globalstyles.js";
import Router from "./shared/Router";
import MOCK_DATA from "../src/data/PokemonMockData.js";
import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      {/* 글로벌 폰트 적용 */}
      <GlobalStyles />
      <Router mockData={MOCK_DATA} />
    </Provider>
  );
}

export default App;
