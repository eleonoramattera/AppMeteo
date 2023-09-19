import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Previsioni from "../Previsioni/Previsioni";
import "./Home.css";

const Home = () => {
  const napoli =
    "https://api.openweathermap.org/data/2.5/weather?lat=40.85&lon=14.26&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const torino =
    "https://api.openweathermap.org/data/2.5/weather?lat=45.07&lon=7.68&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const milano =
    "https://api.openweathermap.org/data/2.5/weather?lat=45.46&lon=9.18&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const genova =
    "https://api.openweathermap.org/data/2.5/weather?lat=44.40&lon=8.94&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const bari =
    "https://api.openweathermap.org/data/2.5/weather?lat=41.11&lon=16.87&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const roma =
    "https://api.openweathermap.org/data/2.5/weather?lat=41.90&lon=12.50&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const venezia =
    "https://api.openweathermap.org/data/2.5/weather?lat=45.44&lon=12.32&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const firenze =
    "https://api.openweathermap.org/data/2.5/weather?lat=43.76&lon=11.25&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const palermo =
    "https://api.openweathermap.org/data/2.5/weather?lat=38.11&lon=13.36&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const cagliari =
    "https://api.openweathermap.org/data/2.5/weather?lat=39.22&lon=9.12&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const perugia =
    "https://api.openweathermap.org/data/2.5/weather?lat=43.11&lon=12.39&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const bologna =
    "https://api.openweathermap.org/data/2.5/weather?lat=44.49&lon=11.34&appid=4089d04051bc5c910b2b7ee5e7d1e908";
  const apiMeteo = [napoli, torino, milano, genova, bari, roma, venezia, firenze, palermo, cagliari, perugia, bologna];

  const [cityData, setCityData] = useState([]);

  const fetchCityData = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        const cityInfo = {
          name: data.name,
          main: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        };
        return cityInfo;
      } else {
        console.error("Errore nella richiesta API");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const selezionaAPI = async () => {
      const apiCasuali = [...apiMeteo];
      const cityInfoArray = [];

      while (cityInfoArray.length < 8 && apiCasuali.length > 0) {
        const indiceCasuale = Math.floor(Math.random() * apiCasuali.length);
        const apiSelezionata = apiCasuali.splice(indiceCasuale, 1)[0];
        const cityInfo = await fetchCityData(apiSelezionata);
        if (cityInfo) {
          cityInfoArray.push(cityInfo);
        }
      }

      setCityData(cityInfoArray);
    };

    selezionaAPI();
  }, []);

  return (
    <>
      <Row className="w-100 text-center">
        <Col xs={12} className="d-flex flex-wrap justify-content-center">
          {cityData.map((cityInfo, index) => (
            <Col xs={6} md={4} lg={2} className="mt-5 ms-5" key={`city-${index}`}>
              <Link
                to={{
                  pathname: "/previsioni",
                }}>
                <Card class="shadow p-3 mb-5 bg-body rounded">
                  <Card.Title className="text-center fs-3 mt-4">{cityInfo.name}</Card.Title>
                  <Card.Body>
                    <h4 className="text-center fw-bold">{cityInfo.main}</h4>
                    <Card.Img
                      variant="top"
                      className="w-50 mx-5"
                      src={`http://openweathermap.org/img/w/${cityInfo.icon}.png?mode=png`}
                    />
                    <Card.Text>
                      {cityInfo.main} <br /> {cityInfo.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Home;
