import React, { useEffect, useState } from 'react';

const DemoEight = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        getData()
    });

    const getData = async () => {
        await sleep(2000);
        setData({contrivedString: "The data!"});
    };


    // UGLY!!!!!!!!!!!!!! blah....
    if (!data) {
        return null;
    }

    return (
        <div>
            <h1>Demo 8</h1>
            <div>{data.contrivedString}</div>
        </div>
    );
};

export default DemoEight;


const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
