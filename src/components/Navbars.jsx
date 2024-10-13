import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import InputGroup from 'react-bootstrap/InputGroup';

// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars({setIsAdult,isAdult}) {



  return (
    <>
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
            <Button variant="outline-success" onClick={()=>{
              
            }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          <Form className="my-3">
          <div className='d-flex flex-row gap-4 mx-2 px-2 my-4'>
            <Form.Check // prettier-ignore
              type="switch"
              id="adultContent"
              label="Adult Content"
              value={isAdult}
              onChange={()=>setIsAdult(!isAdult)}
            />
              <input placeholder='Max Pages' style={{width:"100px"}} type="number"/>
          </div>
          
          </Form>
    </>
  );
}

export default Navbars;