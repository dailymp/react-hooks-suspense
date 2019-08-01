import React, {
    useState,
    useRef,
    useEffect
} from "react";

const getJokes = async (searchTerm, abortSignal) => {
    let results = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
        headers:{
            'accept': 'application/json'
        },
        signal: abortSignal
    });

    const jokesJson = await results.json();
    return jokesJson.results;
};


const StepFour = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jokes, setJokes] = useState([]);
    const focusElement = useRef(null);

    useEffect(() => {
        focusElement.current.focus();
    }, []);

    useEffect(() => {
        let isCurrent = true;
        const controller = new AbortController();

        const loadJokes = async () => {
            if (!searchTerm) return;

            await sleep(300);
            if (isCurrent) {
                const jokes = await getJokes(searchTerm, controller.signal);
                setJokes(jokes);
            }
        };
        loadJokes();

        return () => {
            isCurrent = false;
            controller.abort();
        }
    }, [searchTerm]);


    let jokeComponents = jokes.map((joke) => {
        return (
            <li key={joke.id}>{joke.joke}</li>
        )
    });

    return (
        <div>
            <h1>Step 4</h1>
            <div>
                <input
                    ref={focusElement}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm} type='text' />
            </div>
            <ul>
                {jokeComponents}
            </ul>
        </div>
    );
};

export default StepFour;


const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}