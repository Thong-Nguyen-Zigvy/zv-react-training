import React, {useState} from 'react'

const SearchBar = ({handleSearchCountries}) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
        handleSearchCountries(event.target.value);
    }


    return <input type="text" value={text} onChange={handleChange} />

}

export default SearchBar;