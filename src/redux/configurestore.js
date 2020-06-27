import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
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
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}