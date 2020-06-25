import * as ActionTypes from './actiontypes';

export const Tels = (state = {
    isLoading: true,
    errMess: null,
    tels: []
}, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_TELS:
            return {...state, isLoading: true, errMess: null, tels: [] };

        case ActionTypes.ADD_TELS:
            return {...state, isLoading: false, errMess: null, tels: action.payload };

        case ActionTypes.TELS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, tels: [] };

        default:
            return state;
    }
}