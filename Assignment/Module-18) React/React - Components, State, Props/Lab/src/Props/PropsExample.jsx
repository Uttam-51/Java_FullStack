import React from 'react';
import UserCard from './UserCard';

export default function PropsExample() {
    return (
        <>
        <hr />
            <h1>Props Example Using Cards</h1>
            <div className="row justify-content-between">
                <UserCard name='Mohan Pratap' age='22' location='Rajkot' />
                <UserCard name='Suryakant Reddy' age='42' location='Ahmedabad' />
                <UserCard name='Vishwa Patel' age='28' location='Banglore' />
                <UserCard name='Venkatesh Iyer' age='35' location='Pune' />
            </div>
            <hr />
        </>
    )
}


