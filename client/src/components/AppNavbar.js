import React, { Component } from 'react';
import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import Navbar from 'reactstrap/lib/Navbar';

class AppNavbar extends Component{
    
    state = {
        isOpen: true
    }

    toggle = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className = "ml-auto" navbar>
                                <NavLink href="http://github.com/ifejibola">Github</NavLink>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;