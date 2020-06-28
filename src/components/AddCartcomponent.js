import React from 'react';
import { Card, CardHeader, CardImg, CardBody, CardText, Button } from 'reactstrap';
import { Loading } from './Loadingcomponent';
import { baseUrl } from '../baseUrl';

function AddCart(props) {
    const item = props.items.items.map((item) => {
            return ( <
                div className = "col-12 col-md-4 offset-md-1  mt-5 mb-5" >
                <
                Card >
                <
                CardHeader className = "bg-primary text-white" > < h4 > { item.name } < /h4></CardHeader >
                <
                CardImg src = { baseUrl + item.image }
                / > <
                CardBody className = "bg-dark" >
                <
                CardText className = "text-white" >
                <
                h5 > { item.price } < /h5> <
                p > { item.description } < /p> < /
                CardText >
                <
                Button color = "success" > Check Out < /Button> <
                Button color = "warning"
                onClick = {
                    () => props.del(item.id, props.items)
                } > Delete from Cart < /Button> < /
                CardBody > < /
                Card > <
                /div>  );
            });
        if (props.items.isLoading) {
            return ( < div className = "container" > < div className = "row" > < Loading / > < /div></div > );
        } else if (props.items.errMess) {
            return ( < div className = "container" > < div className = "row" > { props.items.errMess } < /div></div > );
        } else if (props.items.items === []) {
            return ( < div className = "container" > < div className = "row" > < div className = "col-12 col-md-4 mt-4" > < h4 > Cart Empty.Shop now! < /h4></div > < /div></div > )
        } else {
            return ( <
                div className = "container" >
                <
                div className = "row" > { item } <
                /div> < /
                div >
            )
        }
    }

    export default AddCart;