import "./App.css";
import GlobalStyles from "./Globalstyles.js";
import Router from "./shared/Router";

import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      {/* 글로벌 폰트 적용 */}
      <GlobalStyles />
      <Router />
    </Provider>
  );
}

export default App;
