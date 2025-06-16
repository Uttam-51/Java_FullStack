import React from 'react'

// Task: 
// -- Create a list of users where each user has a unique id. Render the user list using 
//    React and assign a unique key to each user. 
export default function ObjectList() {
    const users = [
        { id: 1, name: 'Enny George', city: 'Bengaluru' },
        { id: 2, name: 'Will Smith', city: 'California' },
        { id: 3, name: 'Leonardo DiCaprio', city: 'Los Angeles' },
        { id: 4, name: 'Raj Gerry', city: 'Boston' },
    ];

    return (
        <div>
            <hr />
            <h2>List Example using Object</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}><b> Name: </b>{user.name} <b>Located at: </b>{user.city}</li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
