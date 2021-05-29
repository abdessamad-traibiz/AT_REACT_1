import React from 'react'
import { Navbar,Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
    return (
        <div>
            <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>E-vente</Navbar.Brand>
                </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                <LinkContainer to="/cart">
                    <Nav.Link><i class="fas fa-shopping-cart"></i>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link Link to="/login"><i class="fas fa-user"></i>Login</Nav.Link>
                </LinkContainer>
                    </Nav>
                 </Navbar.Collapse> 
            </Container>
        </Navbar>
            </header>
        </div>
    )
}

export default Header
