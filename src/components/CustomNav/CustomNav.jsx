// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import meteo from "../../assets/img/meteo.png";
import "./CustomNav.css";

const CustomNav = () => {
  const location = useLocation();
  console.log("LOCATION", location);

  return (
    <Navbar
      id="mynav"
      style={{
        width: "20%",
        height: "100%",
        borderRadius: "30px",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
      }}>
      <Container className="d-flex, flex-column">
        <Navbar.Brand href="#home">
          <img src={meteo} alt="logo meteo" style={{ width: "200px", marginTop: "20px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className=" d-flex flex-column align-items-center">
          <div>
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className={`nav-link ${location.pathname === "/previsioni" ? "active" : ""}`} to="/previsioni">
              Previsioni
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
