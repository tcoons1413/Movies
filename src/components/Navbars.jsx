import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import MovieGenres from "./MovieGenres";
// import { useState } from "react";

function Navbars({ year, setYear, newGenre, setNewGenre }) {
  return (
    <>
      <div className="sticky-top">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">My Movies</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
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
                <Button variant="outline-success" onClick={() => {}}>
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar className="bg-body-tertiary">
          <div className="d-flex gap-3 filterMovieStyle">
            <div className="d-flex flex-row gap-2">
              <div data-mdb-input-init className="form-outline">
                <input
                  type="number"
                  id="typeNumber"
                  className="form-control"
                  placeholder="Pages"
                />
              </div>
              <div data-mdb-input-init className="form-outline">
                <input
                  type="number"
                  id="year"
                  className="form-control"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <MovieGenres setNewGenre={setNewGenre} newGenre={newGenre} />
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default Navbars;
