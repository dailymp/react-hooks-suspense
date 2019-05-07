import React, { useEffect, useRef, useState} from 'react';

const DemoThree = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const focusElement = useRef(null);
    useEffect(() => {
        focusElement.current.focus();
    });

    return (
        <div>
            <h1>Demo 3</h1>
            <div>
                First name: <input ref={focusElement} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                Last name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
        </div>
    );
};

export default DemoThree;
