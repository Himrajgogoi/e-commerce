import * as ActionTypes from './actiontypes';
import { fetch } from 'cross-fetch';
import { baseUrl } from '../baseUrl';

export const addPhone = (newPhone) => ({
    type: ActionTypes.ADD_PHONE,
    payload: newPhone
});

export const postPhone = (pid, name, model, image, price) => (dispatch) => {
    const newPhone = {
        pid: pid,
        name: name,
        model: model,
        image: image,
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

export const postTel = (tid, name, model, image, price) => (dispatch) => {
    const newTel = {
        tid: tid,
        name: name,
        model: model,
        image: image,
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

export const postBook = (bid, name, author, image, price) => (dispatch) => {
    const newBook = {
        bid: bid,
        name: name,
        author: author,
        image: image,
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

export const fetchCart = () => (dispatch) => {
    dispatch(cartLoading(true));

    return fetch(baseUrl + 'cart')
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
        .then(items => dispatch(addItems(items)))
        .catch(error => dispatch(itemsFailed(error)));
};

export const addItems = (items) => ({
    type: ActionTypes.ADD_CART,
    payload: items
});

export const cartLoading = () => ({
    type: ActionTypes.CART_LOADING
});

export const itemsFailed = (error) => ({
    type: ActionTypes.CART_FAILED,
    payload: error
});

export const del = (id, cart) => (dispatch) => {

    const delt = cart.items.map((item) => {
        if (id === item.id) {
            return fetch(baseUrl + "cart/" + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'same-origin'
                })
                .then(response => {
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error("Error: " + response.status + " : " + response.statusText);
                        error.response = response;
                        throw error;
                    }
                }, error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
                .then(response => response.json())
                .then(data => {
                    alert("deleted item with id: " + id);
                    console.log("deleted item with id: " + id);
                    dispatch(delItem(id));
                })
                .catch(error => {
                    alert("Error:" + error.message);
                    console.log("Error:" + error.message)
                });

        }
    });
    return delt;


}

export const delItem = (id) => ({
    type: ActionTypes.DEL_ITEM,
    payload: id
});