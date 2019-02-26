import { combineReducers } from 'redux'

const contrivedReducer = (state = {count: 0}, action) => {
    console.log(state);
    switch (action.type) {
        case "increaseCount":
            return { count: state.count + 1 };
        default:
            return state
    }
};


export default combineReducers({
    contrivedData: contrivedReducer
})
