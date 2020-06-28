import React from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap';
import { Loading } from './Loadingcomponent';
import { baseUrl } from '../baseUrl';
import { Link } from 'react-router-dom';

function Books(props) {
    const book = props.books.books.map((book) => {
        return ( <
            div className = "col-12 col-md-4 offset-md-1 mt-5 mb-5 justify-content-center" >

            <
            Link to = { `/books/${book.bid}` } >
            <
            Card >
            <
            CardHeader className = "bg-primary text-white" > < h4 > { book.name } < /h4></CardHeader >
            <
            CardImg src = { baseUrl + book.image }
            /> <
            CardBody className = "bg-dark" >
            <
            CardText className = "text-white" >

            <
            p > < h5 > author - { book.author } < /h5></p >
            <
            p > < h4 > price - { book.price } < /h4></p >
            <
            /CardText></CardBody >
            <
            /Card> < /
            Link > < /
            div > );
    });
    if (props.books.isLoading) {
        return ( < div className = "container" > < div className = "row" > < Loading / > < /div></div > );
    } else if (props.books.errMess) {
        return ( < div className = "row" > { props.books.errMess } < /div>)
        }
        else {
            return ( < div className = "container" >

                <
                div className = "row" > { book } < /div></div > );
        }


    }

    export default Books;