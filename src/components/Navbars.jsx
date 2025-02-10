import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MovieGenres from "./MovieGenres";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import { Button } from "react-bootstrap";
import LoginButton from "./LoginButton";
import { useAuth } from "./FirebaseAuthContext";
import LogoutButton from "./LogoutButton";

// Helper component for the loading animation
const LoadingSpinner = () => <Spinner />;

function Navbars({
  year,
  setYear,
  newGenre,
  setNewGenre,
  searchValue,
  setSearchValue,
  isTyping,
}) {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const { user } = useAuth();
  return (
    <>
      <div className="sticky-top">
        <Navbar expand="lg" className="bg-body">
          <Container fluid>
            <Navbar.Brand href="#">
              <h1>
                <span style={{ color: "#df6919" }}>My</span> Movies
              </h1>
            </Navbar.Brand>

            {!user && <LoginButton />}
            {user && (
              <>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  ></Nav>

                  <div>
                    <Form className="d-flex">
                      <div className="d-flex justify-content-sm-between">
                        <Form.Control
                          style={{ maxWidth: "162px" }}
                          type="search"
                          placeholder="Search Movie"
                          className="me-2"
                          aria-label="Search"
                          value={searchValue}
                          onChange={handleSearchChange}
                        />
                        <LogoutButton />
                      </div>
                    </Form>
                    <Navbar className="bg-body">
                      <div className="d-flex gap-2 justify-content-between w-sm-100">
                        <div className="d-flex flex-row">
                          <div data-mdb-input-init className="form-outline">
                            <input
                              style={{ maxWidth: "162px", minWidth: "100px" }}
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
                          <MovieGenres
                            setNewGenre={setNewGenre}
                            newGenre={newGenre}
                          />
                        </div>
                      </div>
                    </Navbar>
                  </div>
                </Navbar.Collapse>
              </>
            )}
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navbars;
