import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import Meteo from "../Meteo/Meteo";
import "./Forecast.css";

import { Card } from "react-bootstrap";

function Forecast() {
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
        // console.log("DATAAAA", data);
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

  handleSubmit();
  useEffect(() => {}, [city]);

  return (
    <Row className=" text-center w-100">
      <Col>
        <Form className="d-flex mt-3 ms-3 position-relative w-50" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Cerca una città"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="me-2"
            aria-label="Search"
          />

          <Button className="buttonSearch" type="submit" onClick={handleSubmit}>
            <BsSearch />
          </Button>
        </Form>
      </Col>

      <Col xs={12}>
        {meteo ? (
          <Meteo meteo={meteo} />
        ) : meteo === null && error ? (
          <Alert variant="danger" className="mt-4 ms-3">
            City not found
          </Alert>
        ) : meteo === null && !error ? (
          <>
            <div className="spinner">
              <FaSun className="spinnerIcon" />
            </div>
          </>
        ) : null}
      </Col>
    </Row>
  );
}

export default Forecast;
