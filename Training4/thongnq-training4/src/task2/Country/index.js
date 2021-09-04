import React from 'react'

const Country = ({country}) => {
    return (
        <div style={{height:"240px"}}>
            <h1>{country.name}</h1>
            <h2>Population: {country.population}</h2>
        </div>
    )
}

export default Country
