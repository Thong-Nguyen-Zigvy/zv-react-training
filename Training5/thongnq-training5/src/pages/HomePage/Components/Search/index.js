import React, {useState, useCallback} from 'react';

import "./index.css";

import debounce from 'lodash.debounce';



const Search = ({handleSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value ? event.target.value : '';
        setSearchQuery(value);
        debounceOnChange(value);
    }

    const debounceOnChange = useCallback(debounce(handleSearch, 1000), []);


    return (
        <div className="searchContainer">
            <label htmlFor="seach">Search</label>
            <input type="text" id="search" value={searchQuery} onChange={handleInputChange} placeholder="Enter Name" />
        </div>
    )
}

export default Search;
