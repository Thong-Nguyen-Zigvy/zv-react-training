import React, {useState,useEffect, useRef} from "react";

import Button from "./task3/Button";

function App() {

  const [count, setCount] = useState(0);
  const [startInt, setStartInt] = useState(false);
  const [error, setError] = useState("");
  
  const inputRef = useRef(null);

  useEffect(() => {
    if(count <= 0){
      setStartInt(false);
    }
  }, [count])


  useEffect(() => {
    let newIntervalId;
    if(startInt === true){
      newIntervalId = setInterval(() => {      
        setCount(prevCount => prevCount - 1);
      }, 1000);
    }

    return () => clearInterval(newIntervalId);
  }, [startInt])

  const handleClick = () => {

    const userInput = inputRef.current.value;
    if(userInput.trim() === ""){
      setError("Please input a number");
    } else if(isNaN(userInput)){
      setError("Invalid input. Must be a number");
    } else if (parseInt(userInput) <= 0){
      setError("Number must be greater than 0");
    } else {
      setError("");
      
      if(count === 0){
        setCount(parseInt(userInput));
        setStartInt(true);
      } else {
        setStartInt(true);

      }
      // const newIntervalId = setInterval(() => {
      //   console.log(count);
      //   setCount(prevCount =>{
      //     if(prevCount <= 1 ){
      //       clearInterval(newIntervalId);
      //       setIntervalId(0);
      //       return 0;
      //     }
      //     return prevCount - 1});
      // }, 1000);
      // setIntervalId(newIntervalId);
  };

}



  const stopCounter = () => {
    setStartInt(false);
  }


  return (
    <div className="App">
      {count ? <h1>Counter: {count}</h1> : null}
      {error ? <h2>Error: {error}</h2> : null}
      <label for="num">Enter a number</label> <br/>
      <input id="num" type="text" ref={inputRef} /><br/>
      <Button action={handleClick}>
        {count === 0 ? "Start" : "resume"}
      </Button>
      {count !== 0 ? <Button action={stopCounter}>Stop</Button> : null}
    </div>
  );
}

export default App;
