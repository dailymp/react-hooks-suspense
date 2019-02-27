import { useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import objectHash from 'object-hash';

let promiseLookup = {};

export const useAsyncAction = (func, ...args) => {
    let {store} = useContext(ReactReduxContext);
    let hash = objectHash({fn: func, ...args});
    if (!promiseLookup[hash]) {
        let promise = func(store.dispatch, store.getState, ...args);
        promise.then(() => {
            if (promiseLookup[hash]) {
                promiseLookup[hash].done = true
            }
        });
        promiseLookup[hash] = { promise, done: false }
    }

    if (promiseLookup[hash] && !promiseLookup[hash].done) {
        throw promiseLookup[hash].promise;
    }

    useEffect(() => {
        return () => {
            if (promiseLookup[hash]) {
                promiseLookup[hash] = null;
            }
        }
    }, [...args]);
};

export const useAsyncActions = (arr) => {
    let {store} = useContext(ReactReduxContext);
    let hash = objectHash(arr);
    if (!promiseLookup[hash]) {
        let promises = [];
        arr.forEach((element) => {
            let promise = element.fn(store.dispatch, store.getState, ...element.args);
            promises.push(promise);
        });

        let promise = Promise.all(promises);
        promise.then(() => {
            if (promiseLookup[hash]) {
                promiseLookup[hash].done = true
            }
        });
        promiseLookup[hash] = { promise, done: false }
    }

    if (promiseLookup[hash] && !promiseLookup[hash].done) {
        throw promiseLookup[hash].promise;
    }

    let args = [];
    arr.forEach((element) => {
        args = args.concat(element.args);
    });
    useEffect(() => {
        return () => {
            if (promiseLookup[hash]) {
                promiseLookup[hash] = null;
            }
        }
    }, ...args);
};
