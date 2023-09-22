import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Forecast from "./components/Forecast/Forecast.jsx";
import CustomNav from "./components/CustomNav/CustomNav.jsx";

function App() {
  return (
    <>
      <Container fluid className="d-flex p-0 h-100">
        <BrowserRouter>
          <CustomNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/previsioni" element={<Forecast />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}
export default App;
