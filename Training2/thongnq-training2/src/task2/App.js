import React, {useState} from "react";

import Modal from "./Modal";
import CloseButton from "./CloseButton"; 

function App() {
  const [close, setClose] = useState(false);
  const closeModal = () => {
    setClose(true);
  }
  return (
    <div className="App">
      <h1 className="text-red-500">Yooo</h1>
      <Modal close={close}>
        Hello
        <CloseButton closeModal={closeModal}/>
      </Modal>
    </div>
  );
}

export default App;
