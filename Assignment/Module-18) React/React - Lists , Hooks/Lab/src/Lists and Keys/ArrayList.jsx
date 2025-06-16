import React from 'react'

// Task: 
// -- Create a React component that renders a list of items (e.g., a list of fruit names). Use 
//    the map() function to render each item in the list. 

export default function ArrayList() {
    const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

    return (
        <div>
            <hr />
            <h2>List Example Using Array</h2>
            <h4><u>Fruit List</u></h4>
            <ul>
                {
                    fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))
                }
            </ul>
            <hr />
        </div>
    );
}
