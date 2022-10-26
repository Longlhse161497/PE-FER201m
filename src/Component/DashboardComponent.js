import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, NavItem, Nav, Collapse } from "reactstrap";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }
    render() {
        return (
            <Navbar className="navbar-dark" expand="sm">
                <div className="container-fluid">
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <NavbarBrand className="mr-auto navbrand" href="/">CATERGORIES</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Lighting</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Bedding</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Bath & Shower</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Dashboard;