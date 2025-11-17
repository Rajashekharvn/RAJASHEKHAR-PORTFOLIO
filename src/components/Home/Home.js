// src/components/Home/Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./Home.css"; // 1. Import the CSS file

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content reveal"> {/* reveal added */}
          <Row>
            <Col md={7} className="home-header reveal-left">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAJASHEKHAR V N</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="reveal-child">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="reveal-right">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid floating"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
