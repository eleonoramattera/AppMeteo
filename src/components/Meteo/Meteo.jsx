import { Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import "./Meteo.css";
function Meteo({ meteo }) {
  return (
    <>
      <Row>
        {meteo.map((meteo) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
              <Card class="shadow p-3 mb-5 bg-body rounded ">
                <Card.Body>
                  <Card.Text>
                    <h5>Giorno: {new Date(meteo.dt_txt).toLocaleDateString("it-IT")}</h5>
                    <h5>Ora: {new Date(meteo.dt_txt).toLocaleTimeString("it-IT")}</h5>
                  </Card.Text>

                  <Card.Img
                    variant="top"
                    className=" mx-5 position-absolute start-0 top-0 mt-2 ms-2"
                    src={`http://openweathermap.org/img/w/${meteo.weather[0].icon}.png?mode=png`}
                    alt="weather"
                    width="10px"
                    style={{ zIndex: -1, filter: "blur(4px) opacity(0.9)" }}
                  />

                  <Card.Text>
                    <p className="text-center fw-bold "> {meteo.main.temp}°F</p>
                    <p>
                      {meteo.weather[0].main} <br></br> {meteo.weather[0].description}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
export default Meteo;
