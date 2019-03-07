import React, { useState } from 'react';

const DemoOne = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Demo 1</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Push me!</button>
        </div>
    );
};

export default DemoOne;
