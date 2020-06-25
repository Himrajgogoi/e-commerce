import { createStore, combineReducers } from 'redux';
import { Books } from './books';
import { Phones } from './phones';
import { Tels } from './televisions';
import { Cart } from './cart';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            books: Books,
            phones: Phones,
            tels: Tels,
            cart: Cart
        })
    );
    return store;
}