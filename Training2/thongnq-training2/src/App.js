import React, {useState, useRef, useEffect} from "react";

import Button from "./task3/Button";

function App() {

  const [userInput, setUserInput] = useState(0);

  const [error, setError] = useState("");

  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    const timer = userInput > 0 && !stopTimer && setInterval(() => setUserInput(userInput - 1), 1000);
    return () => clearInterval(timer);
  }, [userInput]);

  const inputRef = useRef(null);

  const handleStartCounter = () => {
    const userInput = inputRef.current.value;
    if(userInput.trim === ""){
      setError("Please input a number");
    } else if(isNaN(userInput)){
      setError("Invalid input. Must be a number");
    } else if (parseInt(Number(userInput)) != userInput){
      setError("Invalid input. Must be a integer");
    } else if (parseInt(userInput) <= 0){
      setError("Number must be greater than 0");
    } else {
      setUserInput(parseInt(userInput));
      setError("");
      setStopTimer(false);
    }
  }

  const handleStopCounter = () => {
    setStopTimer(true);
  }

  return (
    <div className="App">
      {userInput ? <h1>Counter: {userInput}</h1> : null}
      {error ? <h2>Error: {error}</h2> : null}
      <label for="num">Enter a number</label> <br/>
      <input id="num" type="text" ref={inputRef} /><br/>
      <Button action={handleStartCounter}>Start</Button>
      {userInput && !stopTimer ?<Button action={handleStopCounter}>Stop</Button> : null}
    </div>
  );
}

export default App;
