import { Badge, Col, Nav, Navbar, Row } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Row className='w-100' >
          <Col xs={2}>
            <Navbar.Brand className='p-4' as={NavLink} to="/">BookTech</Navbar.Brand>
          </Col>
          <Col xs={8}>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Qual livro você está procurando?" aria-label="Search" />
              <button className="btn btn-outline-primary text-white-50 bg-dark" type="submit">Buscar</button>
            </form>
          </Col>
          <Col>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Livros</Nav.Link>
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="/shopping-chart">
                <Badge bg="secondary">9<FiShoppingCart /></Badge>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </>
  );
}
export default Header;