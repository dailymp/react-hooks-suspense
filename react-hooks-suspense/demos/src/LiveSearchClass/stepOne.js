import React, { useState } from "react";

const StepOne = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <h1>Step 1</h1>
            <div>
                <input
                    onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type='text' />
            </div>
            <ul>
                
            </ul>
        </div>
    );
};

export default StepOne;
