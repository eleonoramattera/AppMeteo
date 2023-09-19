import { Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import "./Meteo.css";
function Meteo({ meteo }) {
  return (
    <>
      <Row className="mt-3">
        {meteo.map((meteo, index) => (
          <Col xs={12} md={4} lg={2} className="mb-5  ms-5" key={`city-${index}`}>
            <Card class="shadow p-3 mb-5 bg-body rounded">
              <Card.Body>
                <h5>
                  DAY: {new Date(meteo.dt_txt).toLocaleDateString("it-IT")},
                  {new Date(meteo.dt_txt).toLocaleTimeString("it-IT")}
                </h5>
                <Card.Text></Card.Text>

                <Card.Img
                  variant="top"
                  className=" mx-5 position-absolute start-0 top-0 mt-2 ms-2 blurImg"
                  src={`http://openweathermap.org/img/w/${meteo.weather[0].icon}.png?mode=png`}
                  alt="weather"
                  width="10px"
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
        ))}
      </Row>
    </>
  );
}
export default Meteo;
