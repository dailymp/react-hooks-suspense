import { combineReducers } from 'redux'

const contrivedReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case "increaseCount":
            return { ...state, count: state.count + 1 };
        case "contrivedDataReceived":
            return { ...state, contrivedString: action.payload };
        default:
            return state
    }
};


export default combineReducers({
    contrivedData: contrivedReducer
})
