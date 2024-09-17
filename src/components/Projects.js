import {
  Container,
  Col,
  Row,
  Nav,
  TabContainer,
  TabContent,
  Tab,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import headerImg from "../assets/img/banner-bg.png";

export const Projects = () => {
  const personalProjects = [
    {
      title: "Portfolio",
      description: "Development",
      imgUrl: headerImg,
      githubUrl: "https://github.com/ngxquang",
    },
    {
      title: "eCommerce",
      description: "Development",
      imgUrl: projImg2,
      githubUrl: "https://github.com/ngxquang",
    },
  ];
  const TeamProjects = [
    {
      title: "Clinic Management Mobile App",
      description: "Development",
      imgUrl: projImg1,
      githubUrl: "https://github.com/ngxquang/BCarefull",
    },
    {
      title: "Clinic Management Website",
      description: "Backend And Database Development",
      imgUrl: projImg2,
      githubUrl: "https://github.com/ngxquang/PJ-01-Clinic-Management-Website-BE",
    },
    {
      title: "Flowchart Visualize",
      description: "Backend - Database Optimize - Deployment",
      imgUrl: projImg3,
      githubUrl: "https://github.com/uit-tgt/PD-001-UIT-FlowChart-BE",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Personal and Team Projects</p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-item-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team Projects</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {personalProjects.map((personalProject, index) => {
                      return <ProjectCard key={index} {...personalProject} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {TeamProjects.map((teamProject, index) => {
                      return <ProjectCard key={index} {...teamProject} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
