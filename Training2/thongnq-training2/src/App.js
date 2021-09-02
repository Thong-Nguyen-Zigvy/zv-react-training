import React, {useState} from "react";

// import Modal from "./task1/Modal";

import Modal from "./task2/Modal";
import CloseButton from "./task2/CloseButton"; 

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
