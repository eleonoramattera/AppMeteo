import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Meteo from "./Meteo/Meteo";

function Previsioni() {
  const [meteo, setMeteo] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city !== " ") {
      try {
        const response = await fetch(
          "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=4089d04051bc5c910b2b7ee5e7d1e908"
        );
        const data = await response.json();
        console.log("DATAAAA", data);
        if (data.cod === "404") {
          setError(true);
        } else {
          setMeteo(data.list);
          // console.log(meteo);
          setError(false);
        }
      } catch (error) {
        console.log("error");
        setError(true);
      }
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [city]);

  return (
    <div>
      <Form className="d-flex, mt-3 ms-3" style={{ position: "relative", width: "200px" }} onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Cerca una città"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="me-2"
          aria-label="Search"
        />
        <BsSearch style={{ width: "2em", position: "absolute", top: "11px", right: "30px", color: "blue" }} />
        <Button className="button " type="submit" onClick={handleSubmit}>
          Cerca
        </Button>
      </Form>

      <Row>
        <Col xs={12}>
          {meteo ? (
            <Meteo meteo={meteo} />
          ) : meteo === null && error ? (
            <Alert variant="danger" className="mt-4 ms-3">
              La città che hai inserito non esiste
            </Alert>
          ) : meteo === null && !error ? (
            <>
              <h3 className="mt-4 ms-3">
                Cerca una città <Spinner animation="border" variant="warning" />
              </h3>
            </>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}

export default Previsioni;
