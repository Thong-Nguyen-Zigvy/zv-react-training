import React from "react";
import { GlobalStyle } from "./GlobalStyle";

//components
import Header from "./components/Header";
import Explore from "./components/section/Explore";
import LiveAnywhere from "./components/section/LiveAnywhere";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Explore />
      <LiveAnywhere />
      <GlobalStyle />
    </div>
  );
}

export default App;
