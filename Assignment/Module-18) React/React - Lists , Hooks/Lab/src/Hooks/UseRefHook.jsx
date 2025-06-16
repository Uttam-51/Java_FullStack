import React, { useEffect, useRef, useState } from 'react' // Import necessary React hooks

// Task: 
// --Create react app to avoid re-renders in react application by useRef() 
//
// In this lab, I am creating a simple typing speed measurement app
// It will show following things:
//      --The elapsed time from the point where user entered the first key stroke
//      --Typing speed calculated in WPM, which updates every 30 seconds
//      --Total number of words typed by the user so far
//      --Reset button to reset everything

export default function UseRefHook() {
    // State to track current typing speed in words per minute
    const [speed, setSpeed] = useState(0); 

    // State to track elapsed time in seconds since typing started
    const [elapsedTime, setElapsedTime] = useState(0); 

    // State to track the number of words typed so far
    const [wordCount, setWordCount] = useState(0);

    // Reference to access the textarea DOM element directly without re-rendering
    const inputRef = useRef(null);

    // Reference to store the timestamp of the last key typed
    const lastTypedTime = useRef(null);

    // Reference to count total number of characters typed (used for speed calculation)
    const charCount = useRef(0);

    // Reference to store the time when the user started typing (only set once)
    const startTime = useRef(null); 

    // useEffect runs once after initial render
    useEffect(() => {
        // Set an interval that runs every 1 second to track time and update stats
        const interval = setInterval(() => {

            // Only run logic if typing has started
            if (startTime.current) {
                const now = Date.now(); // Get current time

                // Calculate total elapsed seconds
                const secondsElapsed = Math.floor((now - startTime.current) / 1000);
                setElapsedTime(secondsElapsed); // Update state

                // Every 30 seconds (or at 1 second mark), calculate typing speed
                if (secondsElapsed === 1 || secondsElapsed % 30 === 0) {
                    // WPM = (total chars / 5) / minutes
                    const wpm = Math.round(((charCount.current / 5) / secondsElapsed) * 60);
                    setSpeed(isFinite(wpm) ? wpm : 0); // Prevent NaN or Infinity
                }

                // Count total words by splitting the input by spaces
                const currentValue = inputRef.current.value.trim(); // Get input value
                const wordsTyped = currentValue ? currentValue.split(/\s+/).length : 0; // Count words
                setWordCount(wordsTyped); // Update state
            }
        }, 1000); // Run every second

        // Cleanup function: clear interval on component unmount
        // Inbuilt function provided by JS to clear interval that we created
        // Calling here as a cleanup function
        return () => clearInterval(interval);
    }, []); // Empty dependency array: run only once

    // Handler for typing (onChange event)
    const handleTyping = () => {
        // Start the timer only on first key press
        if (!startTime.current) {
            startTime.current = Date.now(); // Record start time
        }

        // Increment character count
        charCount.current += 1;

        // Update last typed time (optional use case)
        lastTypedTime.current = Date.now();
    };

    // Handler to reset everything when reset button is clicked
    const handleReset = () => {
        if (inputRef.current) {
            inputRef.current.value = ''; // Clear the input box
        }

        // Reset all states and refs
        setSpeed(0);
        setElapsedTime(0);
        setWordCount(0);
        charCount.current = 0;
        startTime.current = null;
        lastTypedTime.current = null;
    };

    // JSX to render the UI
    return (
        <div>
            <hr />
            <h1>useRef() Hook Example (Typing Speed Tracker Component)</h1>
            {/* Text area for typing, connected to inputRef and onChange handler */}
            <textarea id='inputBox' ref={inputRef} placeholder="Start typing..." onChange={handleTyping} rows={6} cols={150} />
            
            {/* Display metrics and reset button */}
            <div className='d-flex justify-content-between align-items-center w-50'>
                <span style={{ marginRight: '20px' }}><b>Typing speed:</b> {speed} WPM</span>
                <span style={{ marginRight: '20px' }}><b>Elapsed time:</b> {elapsedTime} seconds</span>
                <span><b>Total words typed:</b> {wordCount}</span>
                <button className='btn btn-primary' onClick={handleReset}>Reset</button>
            </div>
            <hr />
        </div>
    );
}
