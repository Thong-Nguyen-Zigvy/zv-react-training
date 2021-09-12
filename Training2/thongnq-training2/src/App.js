import React, {useState, useRef} from "react";

import Button from "./task3/Button";

function App() {

  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {

    const userInput = inputRef.current.value;
    if(userInput.trim() === ""){
      setError("Please input a number");
    } else if(isNaN(userInput)){
      setError("Invalid input. Must be a number");
    } else if (parseInt(userInput) <= 0){
      setError("Number must be greater than 0");
    } else {
      setCount(parseInt(userInput));

      const newIntervalId = setInterval(() => {
        console.log(count);
        setCount(prevCount =>{
          if(prevCount <= 1 ){
            clearInterval(newIntervalId);
            setIntervalId(0);
            return 0;
          }
          return prevCount - 1});
      }, 1000);
      setIntervalId(newIntervalId);
  };

}

  const [error, setError] = useState("");

  const inputRef = useRef(null);


  const stopCounter = () => {
    clearInterval(intervalId);
        setIntervalId(0);
  }


  return (
    <div className="App">
      {count ? <h1>Counter: {count}</h1> : null}
      {error ? <h2>Error: {error}</h2> : null}
      <label for="num">Enter a number</label> <br/>
      <input id="num" type="text" ref={inputRef} /><br/>
      <Button action={handleClick}>
        Start
      </Button>
      {intervalId ? <Button action={stopCounter}>Stop</Button> : null}
    </div>
  );
}

export default App;
