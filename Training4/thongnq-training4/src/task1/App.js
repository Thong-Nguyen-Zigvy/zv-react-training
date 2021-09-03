import React, {useState, useEffect, useCallback} from "react";

import axios from "axios";

import Joke from "./Joke";

import debounce from 'lodash.debounce';

const jokeURL = "https://official-joke-api.appspot.com/random_joke"

const App = () => {
  const [jokes, setJokes] = useState([]);

  const hanldeLoadJoke = () => {
    axios.get(jokeURL).then(response => {
      setJokes(prev => [...prev, response.data]);
    })
  }

  const debounceSave = useCallback(debounce(() => hanldeLoadJoke(), 1000), []);

  useEffect(() => {
    hanldeLoadJoke();
  }, [])

  return (
    <div className="App">
      <button onClick={debounceSave}>Load Joke</button>
      {jokes.map(joke => <Joke setup={joke.setup} punchline ={joke.punchline} key={joke.id} />)}
    </div>
  );
}

export default App;
