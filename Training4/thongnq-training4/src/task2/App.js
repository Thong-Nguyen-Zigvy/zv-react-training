import React, {useState, useEffect, useCallback} from "react";

import axios from "axios";

import Country from "./Country";

import debounce from 'lodash.debounce';

const countriesAPI = "https://restcountries.eu/rest/v2";

const App = () => {
  const [countries, setCountries] = useState([]);

  const hanldeLoadCountry = (api) => {
    axios.get(api).then(response => {
      setCountries(response.data);
    })
  }

  const debounceOnChange = useCallback(debounce(hanldeLoadCountry, 1000), []);

  useEffect(() => {
    hanldeLoadCountry(countriesAPI + "/all");
  }, [])

  return (
    <div className="App">
      <input type="text" onChange={e => e.target.value ? debounceOnChange(countriesAPI + "/name/" + e.target.value) : debounceOnChange(countriesAPI + "/all")}/>
      {countries.map(country => <Country key={country.alpha2Code} country={country} />)}
    </div>
  );
}

export default App;
