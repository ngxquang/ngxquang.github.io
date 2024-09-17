import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <a href={githubUrl}>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
