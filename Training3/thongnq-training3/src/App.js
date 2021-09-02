import React, {useState} from 'react';

import Modal from './components/Modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const [keyLoggers, setKeyLoggers] = useState("");

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <div className="App">
      <h1>{keyLoggers}</h1>
      
      {openModal ? <Modal action={setKeyLoggers} /> : <button onClick={handleOpenModal}>Open Modal</button>}
    </div>
  );
}

export default App;
