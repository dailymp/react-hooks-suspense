import React, { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

const DemoFive = () => {
    let {store} = useContext(ReactReduxContext);

    const handleClick = () => {
        store.dispatch({type: "increaseCount"});
    };

    return (
        <div>
            <h1>Demo 5</h1>
            <p>{store.getState().contrivedData.count}</p>
            <button onClick={handleClick}>Push me!</button>
        </div>
    );
};

export default DemoFive;
