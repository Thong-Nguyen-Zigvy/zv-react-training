import React from "react";

import Modal from "./Modal";
import CloseButton from "./CloseButton"; 

function App() {

  return (
    <div className="App">
      <h1 className="text-red-500">Yooo</h1>
      <Modal>
      <div>hello</div>
        Hello
        <CloseButton />
      </Modal>
    </div>
  );
}

export default App;
