import React, { Component } from 'react';
import { Card, CardHeader, CardImg, CardBody, CardText, Button } from 'reactstrap';
import { Loading } from './Loadingcomponent';
import { baseUrl } from '../baseUrl';


class Phonedetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        if (this.props.phoneLoading) {
            return ( < div className = "container" > < div className = "row" > < Loading / > < /div></div > )
        } else if (this.props.phoneErrmess) {
            return ( < div className = "container" > < div className = "row" > { this.props.phoneErrmess } < /div></div > )
        } else {


            return ( <
                div className = "container" >
                <
                div className = "row" >
                <
                div className = "col-12 col-md-5 mt-4" >
                <
                Card > < CardImg src = { baseUrl + this.props.phone.image }
                /></Card >

                <
                /div> <
                div className = "col-12 col-md-5 mt-4" >
                <
                Card > < CardHeader className = "bg-warning text-white" > < h4 > { this.props.phone.name } < /h4></CardHeader >
                <
                CardBody className = "bg-dark" > < CardText className = "text-white" > < p > < h5 > Model - { this.props.phone.model } < /h5></p >
                <
                p > < h6 > Description - < /h6> { this.props.phone.description } < /p > <
                p > < h5 > Price - { this.props.phone.price } < /h5></p > < /CardText></CardBody > < /Card> <
                Button onClick = {
                    () => this.props.postPhone(this.props.phone.pid, this.props.phone.name, this.props.phone.model, this.props.phone.image, this.props.phone.price)
                }
                color = "primary" > Add to Cart < /Button> <
                Button color = "success" > Buy Now < /Button> < /
                div >
                <
                /div>  < /
                div >
            )
        }
    }


}

export default Phonedetails;