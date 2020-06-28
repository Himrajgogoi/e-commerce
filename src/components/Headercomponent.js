import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({ NavOpen: !this.state.NavOpen });
    }
    render() {
        return ( < div >

            <
            Navbar dark expand = "md"
            fixed color = "primary" >
            <
            div className = "container" >
            <
            NavbarToggler onClick = { this.toggleNav } > < span className = "fa fa-toggle-down fa-lg" > < /span> < /NavbarToggler > <
            NavbarBrand > < h4 > E - commerce < /h4></NavbarBrand >
            <
            Collapse isOpen = { this.state.NavOpen }
            navbar >
            <
            Nav navbar >
            <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/home" > < span className = "fa fa-home fa-lg" > < /span> Home < /NavLink > <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/books" > < span className = "fa fa-book fa-lg" > < /span> Book</NavLink >
            <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/phones" > < span className = "fa fa-phone fa-lg" > < /span> Phone</NavLink >
            <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/televisions" > < span className = "fa fa-television fa-lg" > < /span> Television</NavLink >
            <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/cart" > < span className = "fa fa-trolley fa-lg" > < /span> Cart</NavLink >
            <
            /NavItem> < /
            Nav > <
            /Collapse> < /
            div >
            <
            /Navbar> <
            Jumbotron > <
            div classname = "container header" >

            <
            div className = "row" >
            <
            div className = "col-12 col-md-4 offset-md-5" >
            <
            h1 className = "text-white" > E - Commerce < /h1> < /
            div > <
            /div>      < /
            div > <
            /
            Jumbotron > < /
            div > )
    }
}

export default Header;