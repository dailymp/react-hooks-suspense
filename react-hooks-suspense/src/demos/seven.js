import React, { Suspense } from 'react';

const DemoSeven = () => {

    return (
        <div>
            <h1>Demo 7</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <DemoSevenPromise />
            </Suspense>
        </div>
    );
};


let promise = null;
let finished = false;

const DemoSevenPromise = () => {

    if (!promise) {
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                finished = true;
                resolve();
            }, 5000);
        });
    }

    if (!finished) {
        throw promise;
    }

    return (
        <div>
            I finally rendered
        </div>
    )

};

export default DemoSeven;
