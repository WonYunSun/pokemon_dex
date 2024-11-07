import "./App.css";
import Router from "./shared/Router";
import GlobalStyles from "./Globalstyles.js";

function App() {
  return (
    <>
      {/* 글로벌 폰트 적용 */}
      <GlobalStyles />
      <Router></Router>
    </>
  );
}

export default App;
