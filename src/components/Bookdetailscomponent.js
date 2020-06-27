import React, { Component } from 'react';
import { Card, CardHeader, CardImg, CardBody, CardText, Button } from 'reactstrap';
import { Loading } from './Loadingcomponent';
import { baseUrl } from '../baseUrl';


class Bookdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        if (this.props.bookLoading) {
            return ( < div className = "container" > < div className = "row" > < Loading / > < /div></div > )
        } else if (this.props.bookErrmess) {
            return ( < div className = "container" > < div className = "row" > { this.props.bookErrmess } < /div></div > )
        } else {


            return ( <
                div className = "container" >
                <
                div className = "row" >
                <
                div className = "col-12 col-md-5 mt-4" >
                <
                Card > < CardImg src = { baseUrl + this.props.book.image }
                /></Card >

                <
                /div> <
                div className = "col-12 col-md-5 mt-4" >
                <
                Card > < CardHeader className = "bg-warning text-white" > < h4 > { this.props.book.name } < /h4></CardHeader >
                <
                CardBody className = "bg-secondary" > < CardText className = "text-white" > < p > < h5 > Author - { this.props.book.author } < /h5></p >
                <
                p > < h6 > Description - < /h6> { this.props.book.description } < /p > <
                p > < h5 > Price - { this.props.book.price } < /h5></p > < /CardText></CardBody > < /Card> <
                Button onClick = {
                    () => this.props.postBook(this.props.book.bid, this.props.book.name, this.props.book.author, this.props.book.image, this.props.book.price)
                }
                color = "primary" > Add to Cart < /Button> <
                Button color = "success" > Buy Now < /Button>  < /
                div > <
                /
                div >
                <
                /div>
            )
        }
    }


}

export default Bookdetails;