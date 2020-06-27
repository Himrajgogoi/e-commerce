import React from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap';
import { Loading } from './Loadingcomponent';
import { baseUrl } from '../baseUrl';
import { Link } from 'react-router-dom';

function Tels(props) {
    const tels = props.tels.tels.map((tel) => {
        return ( < div className = "col-12 col-md-5 mt-5 ml-5" >
            <
            Link to = { `/televisions/${tel.tid}` } >
            <
            Card >
            <
            CardHeader className = "bg-success text-white" > < h4 > { tel.name } < /h4></CardHeader >
            <
            CardImg src = { baseUrl + tel.image }
            /> <
            CardBody className = "bg-dark" > < CardText className = "text-white" >
            <
            p > < h6 > model - { tel.model } < /h6></p >
            <
            p > < h4 > price - { tel.price } < /h4></p >
            <
            /CardText></CardBody >
            <
            /Card> < /
            Link > <
            /
            div > );
    });
    if (props.tels.isLoading) {
        return ( < div className = "container" > <
            div className = "row" > < Loading / > < /div></div >
        );
    } else if (props.tels.errMess) {
        return ( < div className = "row" > { props.tels.errMess } < /div>)
        }
        else {
            return ( < div className = "container" > < div className = "row" > { tels } < /div>< /div > );
        }

    }

    export default Tels;