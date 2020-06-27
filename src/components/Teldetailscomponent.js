import React, { Component } from 'react';
import { Card, CardHeader, CardImg, CardBody, CardText, Button } from 'reactstrap';
import { Loading } from './Loadingcomponent';
import { baseUrl } from '../baseUrl';

class Teldetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (this.props.telLoading) {
            return ( < div className = "container" > < div className = "row" > < Loading / > < /div> < /div > );
        } else if (this.props.telErrmess) {
            return ( <
                div className = "container" > < div className = "row" > { this.props.telErrmess } < /div> < /div >
            );
        } else {
            return ( < div className = "container" >
                <
                div className = "row" >

                <
                div className = "col-12 col-md-5 mt-4" >
                <
                Card >
                <
                CardImg src = { baseUrl + this.props.tel.image }
                width = "20%"
                height = "20%"
                className = "img-fluid" /
                >
                <
                /Card> < /
                div > <
                div className = "col-12 col-md-5 mt-4" >
                <
                Card >
                <
                CardHeader className = "bg-primary text-white" > < h4 > { this.props.tel.name } < /h4></CardHeader >
                <
                CardBody className = "bg-dark" > < CardText className = "text-white" > < p > < h5 > Model - { this.props.tel.model } < /h5></p >
                <
                p > < h6 > Description - < /h6> { this.props.tel.description } < /p > <
                p > < h5 > Price - { this.props.tel.price } < /h5></p > < /CardText></CardBody > < /Card> <
                Button color = "primary"
                onClick = {
                    () => this.props.postTel(this.props.tel.tid, this.props.tel.name, this.props.tel.model, this.props.tel.image, this.props.tel.price)
                } > Add to Cart < /Button> <
                Button type = "submit"
                color = "success" > Buy Now < /Button> < /
                div > < /div > < /div >
            );
        }
    }
}



export default Teldetails;