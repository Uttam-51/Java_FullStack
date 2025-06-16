import React, { useState } from 'react'

export default function UseStateHook() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <hr />
            <h2>useState() Hook Example</h2>
            <div className='d-flex align-items-baseline'>
                <span style={{ marginRight: '20px', display: 'inline-block' }}> Current value of Counter: <b>{count}</b></span>
                <button className='btn btn-primary' onClick={() => setCount(count + 1)} style={{ marginRight: '20px' }}>Increment</button>
                <button className='btn btn-primary' onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
            <hr />
        </div>
    )
}