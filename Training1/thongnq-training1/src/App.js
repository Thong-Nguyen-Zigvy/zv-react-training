import React from "react";
import { GlobalStyle } from "./GlobalStyle";

//components
import Header from "./components/Header";
import Explore from "./components/section/Explore";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Explore />
      <GlobalStyle />
    </div>
  );
}

export default App;
