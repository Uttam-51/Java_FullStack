import React from 'react'

function Greeting(props) {
    return (
        <div>
            <hr />
            <h1>Function Component Example</h1>
            <h2>Hello, {props.name}</h2>
            <hr />
        </div>
    )
}

export default Greeting
