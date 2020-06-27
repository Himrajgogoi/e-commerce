import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return ( <
        footer className = "footer" >
        <
        div className = "container" >
        <
        div className = "row" >

        <
        div className = "col-6 col-sm-4" >
        <
        address className = " address text-white" >

        <
        h6 > Address: < /h6> < br / >
        Broadway - east, < br / >
        New York, < br / >
        USA(18 - 5 - 2020) < br / > <
        i className = "fa fa-phone fa-lg" > < /i>+91 ********90 <br/ > <
        i className = "fa fa-envelope fa-lg" > < /i><a href="#"> holiday@net</a > < br / >
        <
        i className = "fa fa-fax fa-lg" > < /i><a href="#"> fax@</a > < br / >
        <
        /address>  < /
        div > <
        div className = "col-6 col-sm-5" >
        <
        h6 > Links: < /h6> <
        ul className = "list-unstyled" >
        <
        li > < Link to = '/home' > home < /Link></li >
        <
        li > < Link to = '/aboutus' > aboutus < /Link></li >
        <
        li > < Link to = '/cities' > packages < /Link></li >
        <
        li > < Link to = '/contactus' > contact us < /Link> </li >
        <
        /ul> < /
        div > <
        div className = "col-12 col-sm-3" >
        <
        div className = "align-text-center" >
        <
        a className = "btn btn-social-icon btn-google"
        href = "#" > < i class = "fa fa-google fa-lg" > < /i></a >
        <
        a className = "btn btn-social-icon btn-facebook"
        href = "#" > < i class = "fa fa-facebook fa-lg" > < /i></a >
        <
        /div> < /
        div >

        <
        /div> < /
        div > <
        /footer>);
    }

    export default Footer;