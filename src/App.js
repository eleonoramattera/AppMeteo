import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import Previsioni from "./components/Previsioni/Previsioni.jsx";
import CustomNav from "./components/CustomNav/CustomNav.jsx";

function App() {
  return (
    <>
      <Container fluid className="d-flex p-0 h-100">
        <BrowserRouter>
          <CustomNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/previsioni" element={<Previsioni />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}
export default App;
