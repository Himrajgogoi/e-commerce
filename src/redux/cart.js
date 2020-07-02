import * as ActionTypes from './actiontypes';

export const Cart = (state = {
    isLoading: true,
    errMess: null,
    items: []
}, action) => {

    switch (action.type) {
        case ActionTypes.CART_LOADING:
            return {...state, isLoading: true, errMess: null, items: [] };

        case ActionTypes.ADD_CART:
            return {...state, isLoading: false, errMess: null, items: action.payload };

        case ActionTypes.ADD_BOOK:
            var book = action.payload;
            book.id = state.items.length + 1;
            return {...state, isLoading: false, errMess: null, items: state.items.concat(book) };


        case ActionTypes.ADD_PHONE:
            var phone = action.payload;
            phone.id = state.items.length + 1;
            return {...state, isLoading: false, errMess: null, items: state.items.concat(phone) };



        case ActionTypes.ADD_TEL:
            var tel = action.payload;
            tel.id = state.items.length + 1;
            return {...state, isLoading: false, errMess: null, items: state.items.concat(tel) };

        case ActionTypes.CART_FAILED:
            return {...state, isLoading: false, errMess: action.payload, items: [] };

        case ActionTypes.DEL_ITEM:
            var id = action.payload;
            return {...state, isLoading: false, errMess: null, items: state.items.filter((item) => item.id !== id) };

        default:
            return state;
    }
}