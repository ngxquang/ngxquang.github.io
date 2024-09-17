import {
  Container,
  Col,
  Row,
  Nav,
  TabContainer,
  TabContent,
  Tab,
} from "react-bootstrap";

export const Blogs = () => {
  const blogPosts = [
    {
      title: "Architecture and Optimization with MySQL",
      description:
        "This blog primarily provides guidance on how to optimize MySQL queries and perform data backup/restore.",
      link: "https://ngxquang.github.io/aws-ws1/",
    },
    {
      title: "Docker và hướng dẫn quy trình triển khai ứng dụng trên docker",
      description:
        "Docker giúp đơn giản hóa quá trình phát triển và vận hành phần mềm, giảm tối đa lỗi từ local đi đến vận hành.",
      link: "https://hackmd.io/@baophong2401/BkARqXRq0",
    },
    {
      title: "Data Replication",
      description:
        "Data replication là quá trình sao chép và duy trì dữ liệu ở nhiều vị trí khác nhau. Data Replication đảm bảo tính sẵn sàng, độ tin cậy và hiệu suất của dữ liệu.",
      link: "https://hackmd.io/@baophong2401/S1Ak7ZWtR",
    },
    {
      title: "Github Project Management",
      description:
        "GitHub Projects là một tính năng của GitHub cho phép tổ chức và quản lý các công việc liên quan đến dự án.",
      link: "https://hackmd.io/@baophong2401/SJ6xBCmFC",
    },
  ];

  return (
    <section className="blogs" id="blogs">
      <Container>
        <Row>
          <Col>
            <h2>Blogs</h2>
            <ul className="blog-list">
              {blogPosts.map((post, index) => (
                <li key={index} className="blog-item">
                  <a href={post.link} className="blog-link">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
