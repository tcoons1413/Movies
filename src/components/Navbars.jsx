import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">My Movies</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Movie"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Form className="my-3">
          <div className='d-flex flex-row justify-content-around mx-2 px-2'>
            <Form.Check // prettier-ignore
              type="switch"
              id="adultContent"
              label="Adult Content"
            />
            <Form.Check // prettier-ignore
              type="switch"
              label="disabled switch"
              id="disabled-custom-switch"
            />
            <Form.Check // prettier-ignore
              type="switch"
              label="disabled switch"
              id="disabled-custom-switch"
            />
            <Form.Check // prettier-ignore
              type="switch"
              label="disabled switch"
              id="disabled-custom-switch"
            />
            <Form.Check // prettier-ignore
              type="switch"
              label="disabled switch"
              id="disabled-custom-switch"
            />
          </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;