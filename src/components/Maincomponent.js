import React, { Component } from 'react';
import Header from './Headercomponent';
import Home from './Homecomponent';
import Books from './Bookscomponent';
import Bookdetails from './Bookdetailscomponent';
import Electronics from './Electronicscomponent';
import Phones from './Phonescomponent';
import Phonedetails from './Phonedetailscomponent';
import Tels from './Televisionscomponent';
import Teldetails from './Teldetailscomponent';
import AddCart from './AddCartcomponent';
import Footer from './Footercomponent';
import { fetchBooks, fetchPhones, fetchTels, postBook, postPhone, postTel, fetchCart } from '../redux/ActionCreators';
import { Route, Redirect, Switch, withRouter, } from 'react-router-dom';
import { connect } from 'react-redux';

const MapStatetoProps = state => {
    return {
        books: state.books,
        phones: state.phones,
        tels: state.tels,
        cart: state.cart
    }

};

const MapDispatchtoProps = dispatch => ({
    fetchBooks: () => { dispatch(fetchBooks()) },
    fetchPhones: () => { dispatch(fetchPhones()) },
    fetchTels: () => { dispatch(fetchTels()) },
    fetchCart: () => { dispatch(fetchCart()) },
    postPhone: (id, name, model, image, price) => dispatch(postPhone(id, name, model, image, price)),
    postTel: (id, name, model, image, price) => dispatch(postTel(id, name, model, image, price)),
    postBook: (id, author, name, image, price) => dispatch(postBook(id, author, name, image, price))

});



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.fetchBooks();
        this.props.fetchPhones();
        this.props.fetchTels();
        this.props.fetchCart();
    }


    render() {
            const HomePage = () => {
                return ( < div >
                    <
                    Home phones = { this.props.phones.phones.filter((phone) => phone.featured) }
                    phoneloading = { this.props.phones.isLoading }
                    phoneErrmess = { this.props.phones.errMess }
                    books = { this.props.books.books.filter((book) => book.featured) }
                    bookloading = { this.props.books.isLoading }
                    bookErrmess = { this.props.books.errMess }
                    tels = { this.props.tels.tels.filter((tel) => tel.featured) }
                    telloading = { this.props.tels.isLoading }
                    telErrmess = { this.props.tels.errMess }
                    /> < /
                    div > );
            }
            const Book = ({ match }) => {
                return ( <
                    Bookdetails book = { this.props.books.books.filter((book) => book.bid === parseInt(match.params.bookid, 10))[0] }
                    bookLoading = { this.props.books.isLoading }
                    bookErrmess = { this.props.books.errMess }
                    postBook = { this.props.postBook }
                    />
                );
            }
            const Phone = ({ match }) => {
                return ( <
                    Phonedetails phone = { this.props.phones.phones.filter((phone) => phone.pid === parseInt(match.params.phoneid, 10))[0] }
                    phoneLoading = { this.props.phones.isLoading }
                    phoneErrmess = { this.props.phones.errMess }
                    postPhone = { this.props.postPhone }
                    />
                );
            }
            const Tel = ({ match }) => {
                return ( <
                    Teldetails tel = { this.props.tels.tels.filter((tel) => tel.tid === parseInt(match.params.telid, 10))[0] }
                    telLoading = { this.props.tels.isLoading }
                    telErrmess = { this.props.tels.errMess }
                    postTel = { this.props.postTel }
                    />
                );
            }
            return ( < div >
                    <
                    Header / >
                    <
                    Switch >
                    <
                    Route path = "/home"
                    component = { HomePage }
                    /> <
                    Route exact path = "/books"
                    component = {
                        () => < Books books = { this.props.books }
                        /> } / >
                        <
                        Route path = "/books/:bookid"
                        component = { Book }
                        /> <
                        Route exact path = "/phones"
                        component = {
                            () => < Phones phones = { this.props.phones }
                            />} / >
                            <
                            Route path = "/phones/:phoneid"
                            component = { Phone }
                            /> <
                            Route exact path = "/televisions"
                            component = {
                                () => < Tels tels = { this.props.tels }
                                /> } / >
                                <
                                Route path = "/televisions/:telid"
                                component = { Tel }
                                /> <
                                Route path = "/cart"
                                component = {
                                    () => < AddCart items = { this.props.cart }
                                    />}/ > <
                                    Redirect to = "/home" / >
                                    <
                                    /Switch> <
                                    Footer / > < /
                                    div > );
                            }
                        }
                        export default withRouter(connect(MapStatetoProps, MapDispatchtoProps)(Main));