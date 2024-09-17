import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: "Web Development", value: 60 },
    { name: "Web Deployment", value: 65 },
    { name: "Cloud Services (AWS, Azure)", value: 45 },
  ];


  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="progress-circle">
                      {/* SVG Gradient Definition */}
                      <svg style={{ height: 0 }}>
                        <defs>
                          <linearGradient
                            id={`gradient${index}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#AA367C" />
                            <stop offset="100%" stopColor="#4A2FBD" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <CircularProgressbar
                        value={skill.value}
                        text={`${skill.value}%`}
                        styles={buildStyles({
                          pathColor: `url(#gradient${index})`,
                          textColor: "#fff",
                          trailColor: "#2e2e2e",
                          backgroundColor: "#000",
                        })}
                      />
                    </div>
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
