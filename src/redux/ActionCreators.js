import * as ActionTypes from './actiontypes';
import { fetch } from 'cross-fetch';
import { baseUrl } from '../baseUrl';

export const addPhone = (newPhone) => ({
    type: ActionTypes.ADD_PHONE,
    payload: newPhone
});

export const postPhone = (id, name, model, price) => (dispatch) => {
    const newPhone = {
        id: id,
        name: name,
        model: model,
        price: price
    }

    return fetch(baseUrl + 'cart', {
            method: 'POST',
            body: JSON.stringify(newPhone),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error("Error" + response.status + ":" + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(phone => dispatch(addPhone(phone)))
        .catch(error => dispatch(phonesFailed(error)));
}

export const fetchPhones = () => (dispatch) => {
    dispatch(phonesLoading(true));

    return fetch(baseUrl + 'phones')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error("Error" + response.status + ":" + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(phones => dispatch(addPhones(phones)))
        .catch(error => dispatch(phonesFailed(error)));

}

export const phonesLoading = () => ({
    type: ActionTypes.LOAD_PHONES
});

export const addPhones = (phones) => ({
    type: ActionTypes.ADD_PHONES,
    payload: phones
});

export const phonesFailed = (errmess) => ({
    type: ActionTypes.PHONES_FAILED,
    payload: errmess
});

export const addTel = (newTel) => ({
    type: ActionTypes.ADD_TEL,
    payload: newTel
});

export const postTel = (id, name, model, price) => (dispatch) => {
    const newTel = {
        id: id,
        name: name,
        model: model,
        price: price
    }

    return fetch(baseUrl + 'cart', {
            method: 'POST',
            body: JSON.stringify(newTel),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "same-origin"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error("Error" + response.status + ":" + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(tel => dispatch(addTel(tel)))
        .catch(error => dispatch(telsFailed(error)));

};

export const fetchTels = () => (dispatch) => {
    dispatch(telsLoading(true));

    return fetch(baseUrl + 'televisions')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error("Error" + response.status + ":" + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(tels => dispatch(addTels(tels)))
        .catch(error => dispatch(telsFailed(error)));
};

export const telsLoading = () => ({
    type: ActionTypes.LOAD_TELS
});

export const addTels = (tels) => ({
    type: ActionTypes.ADD_TELS,
    payload: tels
});

export const telsFailed = (errmess) => ({
    type: ActionTypes.TELS_FAILED,
    payload: errmess
});


export const addBook = (newBook) => ({
    type: ActionTypes.ADD_BOOK,
    payload: newBook
});

export const postBook = (id, name, author, price) => (dispatch) => {
    const newBook = {
        id: id,
        name: name,
        author: author,
        price: price
    }

    return fetch(baseUrl + 'cart', {
            method: 'POST',
            body: JSON.stringify(newBook),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "same-origin"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error("Error" + response.status + ":" + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(book => dispatch(addBook(book)))
        .catch(error => dispatch(booksFailed(error)));

};

export const fetchBooks = () => (dispatch) => {
    dispatch(booksLoading(true));

    return fetch(baseUrl + 'books')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error("Error" + response.status + ":" + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(books => dispatch(addBooks(books)))
        .catch(error => dispatch(booksFailed(error)));
};

export const booksLoading = () => ({
    type: ActionTypes.LOAD_BOOKS
});

export const addBooks = (books) => ({
    type: ActionTypes.ADD_BOOKS,
    payload: books
});

export const booksFailed = (errmess) => ({
    type: ActionTypes.BOOKS_FAILED,
    payload: errmess
});