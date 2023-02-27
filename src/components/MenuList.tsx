import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
interface MenuListProps { }

const MenuList: React.FC<MenuListProps> = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BookTech</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/list-books">Livros</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/shopping-chart">Carrinho de compras</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuList;
