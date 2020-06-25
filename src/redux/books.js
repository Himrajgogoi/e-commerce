import * as ActionTypes from './actiontypes';

export const Books = (state = {
    isLoading: true,
    errMess: null,
    books: []
}, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_BOOKS:
            return {...state, isLoading: true, errMess: null, books: [] };

        case ActionTypes.ADD_BOOKS:
            return {...state, isLoading: false, errMess: null, books: action.payload };

        case ActionTypes.BOOKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, books: [] };

        default:
            return state;
    }
}