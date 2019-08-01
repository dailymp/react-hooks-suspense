import React, {
    useState,
    useRef,
    useEffect
} from "react";

const StepTwo = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const focusElement = useRef(null);

    useEffect(() => {
        focusElement.current.focus();
    }, []);

    return (
        <div>
            <h1>Step 2</h1>
            <div>
                <input
                    ref={focusElement}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm} type='text' />
            </div>
            <ul>

            </ul>
        </div>
    );
};

export default StepTwo;
