// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MovieGenres from "./MovieGenres";

function Navbars({
  year,
  setYear,
  newGenre,
  setNewGenre,
  searchValue,
  setSearchValue,
  // handleSearch,
}) {
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value); // Update the searchValue state
  };

  // // Handle search button click
  // const handleSearchClick = () => {
  //   handleSearch(searchValue); // Call the parent function to search
  // };

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

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control
                  style={{ width: "145px" }}
                  type="search"
                  placeholder="Search Movie"
                  className="me-2"
                  aria-label="Search"
                  value={searchValue} // Bind the value to the search input
                  onChange={handleSearchChange} // Update the searchValue state
                />
                {/* <Button
                  disabled
                  style={{ width: "100px" }}
                  variant="outline-success"
                  onClick={handleSearchClick} // Trigger search when button is clicked
                >
                  Search
                </Button> */}
              </Form>
              <Navbar className="bg-body">
                <div className="d-flex gap-3">
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
                    <MovieGenres
                      setNewGenre={setNewGenre}
                      newGenre={newGenre}
                    />
                  </div>
                </div>
              </Navbar>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navbars;
