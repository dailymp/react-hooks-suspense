import React, { useEffect, useRef, useState} from 'react';

const DemoFour = () => {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalId = useRef(null);

    // useInterval(() => {
    //     setCount(count+1);
    // }, isActive ? 100 : null);

    const start = () => {
        //setIsActive(true);
        if (!intervalId.current) {
            intervalId.current = setInterval(() => setCount(count + 1), 1000);
        }
    };

    const stop = () => {
        //setIsActive(false);
        if (intervalId.current) {
            clearInterval(intervalId.current);
            intervalId.current = null;
        }
    };


    return (
        <div>
            <h1>Demo 4</h1>
            <div>
                {count}
            </div>
            <div>
                <button onClick={start} >Start</button>
                <button onClick={stop} >Stop</button>
            </div>
        </div>
    );
};

export default DemoFour;



function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    });

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
