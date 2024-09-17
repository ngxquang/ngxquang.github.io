import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/icons8-github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/ngxquang">
                {" "}
                <img src={github} alt="" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/quang-nguyen-b08b3723a/">
                {" "}
                <img src={navIcon1} alt="" />{" "}
              </a>
              <a href="https://www.facebook.com/xuanquang.0209/">
                {" "}
                <img src={navIcon2} alt="" />{" "}
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
