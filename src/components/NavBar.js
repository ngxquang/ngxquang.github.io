import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/icons8-github.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  const onUpdateActiveLink = (page) => {
    setActiveLink(page);
    const section = document.getElementById(page);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#blogs"
                className={
                  activeLink === "blogs" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("blogs")}
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                href="#publications"
                className={
                  activeLink === "publications" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("publications")}
              >
                Publications
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
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
              <button className="vvd" onClick={handleShow}>
                <span>Let's Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let's Connect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select how you'd like to connect with me:</p>
          <Button
            variant="info"
            href="mailto:your-email@example.com"
            className="m-2"
          >
            Send an Email
          </Button>
          <Button
            variant="info"
            href="https://www.linkedin.com/in/quang-nguyen-b08b3723a/"
            className="m-2"
          >
            Message on LinkedIn
          </Button>
          <Button
            variant="info"
            href="https://www.facebook.com/xuanquang.0209/"
            className="m-2"
          >
            Message on Facebook
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
