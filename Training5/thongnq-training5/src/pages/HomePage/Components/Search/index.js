import React, {useState} from 'react';

import "./index.css"


const Search = ({handleSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchClick = () => {
        handleSearch(searchQuery)
    }


    return (
        <div className="searchContainer">
            <label htmlFor="seach">Search</label>
            <input type="text" id="search" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Enter Name" />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default Search;
