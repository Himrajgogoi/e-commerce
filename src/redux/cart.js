import * as ActionTypes from './actiontypes';

export const Cart = (state = {
    isLoading: true,
    errMess: null,
    items: []
}, action) => {

    switch (action.type) {
        case ActionTypes.LOAD_BOOKS:
            return {...state, isLoading: true, errMess: null, items: [] };

        case ActionTypes.ADD_BOOK:
            var book = action.payload;
            return {...state, items: state.items.concat(book) };

        case ActionTypes.LOAD_PHONES:
            return {...state, isLoading: true, errMess: null, items: [] };

        case ActionTypes.ADD_PHONE:
            var phone = action.payload;
            return {...state, items: state.items.concat(phone) };

        case ActionTypes.LOAD_TELS:
            return {...state, isLoading: true, errMess: null, items: [] };

        case ActionTypes.ADD_TEL:
            var tel = action.payload;
            return {...state, items: state.items.concat(tel) };

        default:
            return state;
    }
}