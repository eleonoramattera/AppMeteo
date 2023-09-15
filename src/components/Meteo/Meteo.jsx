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
              <Card class="shadow p-3 mb-5 bg-body rounded">
                <Card.Body>
                  <h2 className="text-center fw-bold fs-1"> {meteo.main.temp}°C</h2>

                  <Card.Img
                    variant="top"
                    className="w-50 mx-5"
                    src={`http://openweathermap.org/img/w/${meteo.weather[0].icon}.png?mode=png`}
                    alt="weather"
                    width="40%"
                  />

                  <Card.Text>
                    <p>Giorno {new Date(meteo.dt_txt).toLocaleDateString("it-IT")}</p>
                    <p>Ora {new Date(meteo.dt_txt).toLocaleTimeString("it-IT")}</p>
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
