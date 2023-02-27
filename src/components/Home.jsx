import { useState, useEffect } from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import weather from "../data/weather.json";
import weathernapoli from "../data/weathernapoli.json";
import weatherroma from "../data/weatherroma.json";
import weatherfirenze from "../data/weatherfirenze.json";

const Home = () => {
  /*const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchCitta = async function () {
    try {
      let res = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=torino&appid=4089d04051bc5c910b2b7ee5e7d1e908"
      );

      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setData();
      } else {
        console.log(error);
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCitta();
    console.log("componentdidmount");
  }, []);
*/
  return (
    <>
      <div style={{ width: "100%" }}>
        <Row style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
          {weather.list[1].weather.map((citta, index) => (
            <Col xs={3} className="mt-5 ms-5" key={`citta-${index}`}>
              <Card
                class="shadow p-3 mb-5 bg-body rounded"
                style={{
                  width: "250px",
                  borderRadius: "30px",
                  border: "4px solid #0d79f0",

                  boxShadow: "10px 5px 15px rgb(0 42 90)",
                }}>
                <Card.Title className="text-center mt-4">{weather.city.name}</Card.Title>
                <Card.Subtitle className="text-center">{weather.city.country}</Card.Subtitle>
                <Card.Body>
                  <h2 className="text-center fw-bold fs-1">{weather.list[0].main.temp}°C</h2>
                  <Card.Img
                    variant="top"
                    className="w-50 mx-5"
                    src={`http://openweathermap.org/img/w/${citta.icon}.png?mode=png`}
                  />
                  <Card.Text>{citta.main}</Card.Text>
                  <Card.Text>{citta.description}</Card.Text>

                  <h5 className="text-center">
                    <Badge bg="secondary" className="me-2">
                      {weather.city.coord.lat}
                    </Badge>
                    <Badge bg="secondary">{weather.city.coord.lon}</Badge>
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {weathernapoli.list[1].weather.map((citta, index) => (
            <Col xs={3} className="mt-5 ms-5" key={`citta-${index}`}>
              <Card
                class="shadow p-3 mb-5 bg-body rounded"
                style={{
                  width: "250px",
                  borderRadius: "30px",
                  border: "4px solid #0d79f0",
                  boxShadow: "10px 5px 15px rgb(0 42 90)",
                }}>
                <Card.Title className="text-center mt-4">{weathernapoli.city.name}</Card.Title>
                <Card.Subtitle className="text-center">{weathernapoli.city.country}</Card.Subtitle>
                <Card.Body>
                  <h2 className="text-center fw-bold fs-1">{weathernapoli.list[0].main.temp}°C</h2>
                  <Card.Img
                    variant="top"
                    className="w-50 mx-5"
                    src={`http://openweathermap.org/img/w/${citta.icon}.png?mode=png`}
                  />
                  <Card.Text>{citta.main}</Card.Text>
                  <Card.Text>{citta.description}</Card.Text>

                  <h5 className="text-center">
                    <Badge bg="secondary" className="me-2">
                      {weathernapoli.city.coord.lat}
                    </Badge>
                    <Badge bg="secondary">{weathernapoli.city.coord.lon}</Badge>
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
          {weatherfirenze.list[1].weather.map((citta, index) => (
            <Col xs={3} className="mt-5 ms-5" key={`citta-${index}`}>
              <Card
                class="shadow p-3 mb-5 bg-body rounded"
                style={{
                  width: "250px",
                  borderRadius: "30px",
                  border: "4px solid #0d79f0",
                  boxShadow: "10px 5px 15px rgb(0 42 90)",
                }}>
                <Card.Title className="text-center mt-4">{weatherfirenze.city.name}</Card.Title>
                <Card.Subtitle className="text-center">{weatherfirenze.city.country}</Card.Subtitle>
                <Card.Body>
                  <h2 className="text-center fw-bold fs-1">{weatherfirenze.list[0].main.temp}°C</h2>
                  <Card.Img
                    variant="top"
                    className="w-50 mx-5"
                    src={`http://openweathermap.org/img/w/${citta.icon}.png?mode=png`}
                  />
                  <Card.Text>{citta.main}</Card.Text>
                  <Card.Text>{citta.description}</Card.Text>

                  <h5 className="text-center">
                    <Badge bg="secondary" className="me-2">
                      {weatherfirenze.city.coord.lat}
                    </Badge>
                    <Badge bg="secondary">{weatherfirenze.city.coord.lon}</Badge>
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {weatherroma.list[1].weather.map((citta, index) => (
            <Col xs={3} className="mt-5 ms-5" key={`citta-${index}`}>
              <Card
                class="shadow p-3 mb-5 bg-body rounded"
                style={{
                  width: "250px",
                  borderRadius: "30px",
                  border: "4px solid #0d79f0",
                  boxShadow: "10px 5px 15px rgb(0 42 90)",
                }}>
                <Card.Title className="text-center mt-4">{weatherroma.city.name}</Card.Title>
                <Card.Subtitle className="text-center">{weatherroma.city.country}</Card.Subtitle>
                <Card.Body>
                  <h2 className="text-center fw-bold fs-1">{weatherroma.list[0].main.temp}°C</h2>
                  <Card.Img
                    variant="top"
                    className="w-50 mx-5"
                    src={`http://openweathermap.org/img/w/${citta.icon}.png?mode=png`}
                  />
                  <Card.Text>{citta.main}</Card.Text>
                  <Card.Text>{citta.description}</Card.Text>

                  <h5 className="text-center">
                    <Badge bg="secondary" className="me-2">
                      {weatherroma.city.coord.lat}
                    </Badge>
                    <Badge bg="secondary">{weatherroma.city.coord.lon}</Badge>
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
