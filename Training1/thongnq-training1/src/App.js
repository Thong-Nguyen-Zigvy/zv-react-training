import React from "react";
import { GlobalStyle } from "./GlobalStyle";

//components
import Header from "./components/Header";
import Explore from "./components/section/Explore";
import LiveAnywhere from "./components/section/LiveAnywhere";
import Hosting from "./components/section/Hosting";
import  Discover  from "./components/section/Discover";

import Inspiration from "./components/section/Inspiration";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Explore />
      <LiveAnywhere />
      <Hosting />
      <Discover />
      <Inspiration />

      <GlobalStyle />
    </div>
  );
}

export default App;
