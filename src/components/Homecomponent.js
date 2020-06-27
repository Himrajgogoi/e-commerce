import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, Modal, ModalBody, ModalHeader, ModalFooter, Media } from 'reactstrap';
import { Loading } from './Loadingcomponent';
import { baseUrl } from '../baseUrl';

class RenderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        const item = this.props.items.map((item) => {
                return ( < div className = "col-12 col-md-4 offset-md-1 mt-5 mb-5" >
                    <
                    Card className = " bg-dark " >
                    <
                    CardImg src = { baseUrl + item.image }
                    /> <
                    CardBody >
                    <
                    CardText className = "text-white" >
                    <
                    p > < h4 > { item.name } < /h4></p > <
                    p > < h6 > { item.price } < /h6>< /p > < /
                    CardText > <
                    /CardBody> < /
                    Card >
                    <
                    /div>);
                });
            if (this.props.isLoading) {
                return ( <
                    div >
                    <
                    Loading / >
                    <
                    /div>
                );
            } else if (this.props.errMess) {
                return ( <
                    div > { this.props.errMess } <
                    /div>
                );
            } else {
                return ( < div className = "container" > < div className = "row" > { item } < /div>< /div > );

            }

        }
    }

    function Home(props) {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            RenderItem items = { props.phones }
            isLoading = { props.phoneloading }
            errMess = { props.phoneErrmess }
            /> < /
            div > <
            div className = "row" > < RenderItem items = { props.books }
            isLoading = { props.bookloading }
            errMess = { props.bookErrmess }
            />< /
            div > <
            div className = "row" > < RenderItem items = { props.tels }
            isLoading = { props.telloading }
            errMess = { props.telErrmess }
            />  < /
            div > <
            /div>
        );

    }




    export default Home;