import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import meteo from "../../assets/img/meteo.png";
import "./CustomNav.css";

const CustomNav = () => {
  const location = useLocation();
  console.log("LOCATION", location);

  return (
    <Navbar>
      <Container className="d-flex, flex-column">
        <Navbar.Brand href="#home">
          <img src={meteo} alt="logo meteo" className="logo" />
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
              Forecast
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
