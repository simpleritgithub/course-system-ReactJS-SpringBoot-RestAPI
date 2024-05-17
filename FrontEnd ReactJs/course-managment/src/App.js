import React from "react";
import Home from "./components/Home";
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/Adcourse";
import AllContact from "./components/AllContact";
import { ToastContainer } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/Header";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>course-managment
          <Header></Header>
          <Row>
            <Col md={4}>
              <Menus></Menus>
            </Col>
            <Col md={8}>
              <Routes>
                {/* Define your routes */}
                <Route path="/" element={<Home />} exact />
                <Route path="/Add-Course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<Allcourses />} exact />
                <Route path="/contacts" element={<AllContact />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
