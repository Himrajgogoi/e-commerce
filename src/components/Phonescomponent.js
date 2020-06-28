import React from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap';
import { Loading } from './Loadingcomponent';
import { baseUrl } from '../baseUrl';
import { Link } from 'react-router-dom';

function Phones(props) {
    const phones = props.phones.phones.map((phone) => {
        return ( < div className = "col-12 col-md-4 offset-md-1 mt-5 mb-5" >
            <
            Link to = { `/phones/${phone.pid}` } >
            <
            Card >
            <
            CardHeader className = "bg-warning text-white" > < h4 > { phone.name } < /h4></CardHeader >
            <
            CardImg src = { baseUrl + phone.image }
            /> <
            CardBody className = "bg-dark" > < CardText className = "text-white" >
            <
            p > < h6 > model - { phone.model } < /h6></p >
            <
            p > < h4 > price - { phone.price } < /h4></p >
            <
            /CardText></CardBody >
            <
            /Card> < /
            Link > <
            /
            div > );
    });
    if (props.phones.isLoading) {
        return ( < div className = "container" > <
            div className = "row" > < Loading / > < /div></div >
        );
    } else if (props.phones.errMess) {
        return ( < div className = "row" > { props.phones.errMess } < /div>)
        }
        else {
            return ( < div className = "container" > < div className = "row" > { phones } < /div>< /div > );
        }


    }

    export default Phones;