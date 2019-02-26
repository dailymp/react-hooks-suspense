import React, { Suspense } from 'react';
const DemoSizLazy = React.lazy(() => import('./six-lazy'));

const DemoSix = () => {

    return (
        <div>
            <h1>Demo 6</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <DemoSizLazy />
            </Suspense>
        </div>
    );
};

export default DemoSix;
