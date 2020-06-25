import * as ActionTypes from './actiontypes';

export const Phones = (state = {
    isLoading: true,
    errMess: null,
    phones: []
}, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_PHONES:
            return {...state, isLoading: true, errMess: null, phones: [] };

        case ActionTypes.ADD_PHONES:
            return {...state, isLoading: false, errMess: null, phones: action.payload };

        case ActionTypes.PHONES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, phones: [] };

        default:
            return state;
    }
}