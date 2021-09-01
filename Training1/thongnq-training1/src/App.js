import React from "react";
import { GlobalStyle } from "./GlobalStyle";

//components
import Header from "./components/Header";
import Explore from "./components/section/Explore";
import LiveAnywhere from "./components/section/LiveAnywhere";
import Hosting from "./components/section/Hosting";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Explore />
      <LiveAnywhere />
      <Hosting />
      <GlobalStyle />
    </div>
  );
}

export default App;
