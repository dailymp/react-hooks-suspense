import React, { useEffect, useState } from 'react';

const DemoTwo = () => {
    const [position, setPosition] = useState("0, 0");

    useEffect(() => {
        const eventHandler = (e) => {
            console.log(e);
            setPosition(`${e.clientX}, ${e.clientY}`);
        };

        document.addEventListener("mouseup", eventHandler);

        // return () => {
        //     document.removeEventListener("mouseup", eventHandler);
        // };
    });


    return (
        <div>
            <h1>Demo 2</h1>
            <p>{position}</p>
        </div>
    );
};

export default DemoTwo;
