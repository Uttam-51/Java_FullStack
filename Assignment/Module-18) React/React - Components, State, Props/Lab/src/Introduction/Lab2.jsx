import React from 'react'

export default function Lab2() {
    const topic = "JSX stands for JavaScript XML";
    const details = "It allows us to write HTML elements directly within JavaScript and makes code more readable and expressive.";

    return (
        <div>
            <hr />
            <h1>JSX Example</h1>
            <h2>Welcome to JSX!</h2>
            <p><b>{topic}:</b> {details}</p>
            <hr />
        </div>
    )
}
