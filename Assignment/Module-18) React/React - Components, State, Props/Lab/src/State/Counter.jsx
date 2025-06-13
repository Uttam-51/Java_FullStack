import React, { useState } from 'react'

export default function Counter() {
  // Step 1: Create a state variable called "count" with initial value 0
  const [count, setCount] = useState(0);


  return (
    <div >
      <hr />
      <h1>State Example using Count and Increment</h1>
      <p style={{ display: 'inline-block', marginRight: '20px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
    </div>
  );
}