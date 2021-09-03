import React from 'react'

const Joke = ({setup, punchline}) => {
    return (
        <div>
            <h1>{setup}</h1>
            <h2>{punchline}</h2>
        </div>
    )
}

export default Joke
