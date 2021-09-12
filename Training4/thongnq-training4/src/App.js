import React, {useState, useEffect, useCallback} from "react";

import axios from "axios";

import Country from "./task2/Country";

import _debounce from 'lodash.debounce';
import SearchBar from "./task2/SearchBar";

const countriesAPI = "https://restcountries.eu/rest/v2";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  
  const debounceOnChange = useCallback(_debounce(hanldeLoadCountry, 500), []);

  function hanldeLoadCountry(api) {
    setStatus("pending");
    setError(null);
    axios.get(api).then(response => {
      setCountries(response.data);
      setStatus("resolve");
    }).catch(error => {
        setError(error.message);
        setStatus("reject");
    });
  }
  

  useEffect(() => {
    hanldeLoadCountry(countriesAPI + "/all");
  }, [])

  const handleSearchCountries = (text) => {
    if(text.trim() === ""){
      debounceOnChange(countriesAPI + "/all");
    } else {
      debounceOnChange(countriesAPI + "/name/" + text)
    }
  }

  return (
    <div className="App">
      <SearchBar handleSearchCountries={handleSearchCountries}/>
      <h2>Status: {status}</h2>
      {error ? error : null}
      {countries.map(country => <Country key={country.alpha2Code} country={country} />)}
    </div>
  );
}

export default App;
