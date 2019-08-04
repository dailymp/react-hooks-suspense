import React, {
    useState,
    useRef,
    useEffect
} from "react";

const getJokes = async (searchTerm) => {
    let results = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
        headers:{
            'accept': 'application/json'
        },
    });

    const jokesJson = await results.json();
    return jokesJson.results;
};


const StepThree = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jokes, setJokes] = useState([]);
    const focusElement = useRef(null);

    useEffect(() => {
        focusElement.current.focus();
    }, []);

    useEffect(() => {
        const loadJokes = async () => {
            if (!searchTerm) return;

            const jokes = await getJokes(searchTerm);
            setJokes(jokes);
        };
        loadJokes();
    }, [searchTerm]);


    let jokeComponents = jokes.map((joke) => {
        return (
            <li key={joke.id}>{joke.joke}</li>
        )
    });

    return (
        <div>
            <h1>Step 3</h1>
            <div>
                <input
                    placeholder="Dad Jokes Search"
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

export default StepThree;