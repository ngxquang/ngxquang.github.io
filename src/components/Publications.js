import { Card, Button, Col, Container, Row } from "react-bootstrap";
import imgFair from "../assets/img/fair.png";
import imgIeee from "../assets/img/ieee.png";

export const Publications = () => {
  const publications = [
    {
      title:
        "Phát Hiện Đối Tượng Nhỏ Trong Không Ảnh Sử Dụng Phương Pháp Oriented RepPoints",
      authors: "Tạ Việt Phương, Nguyễn Xuân Quang, Nguyễn Tấn Trần Minh Khang",
      image: imgFair,
      publisher:
        "Hội nghị Quốc gia lần thứ XVI về Nghiên cứu cơ bản và ứng dụng CNTT, FAIR 2023",
      links: {
        pdf: "",
        manuscript: "",
        code: "https://github.com/ngxquang/sodaa-mmrotate",
      },
    },
    {
      title:
        "Aerial Data Exploration: An In-Depth Study from Horizontal to Oriented Viewpoint",
      authors:
        "Nguyen D. Vo, HUONG-GIANG NGO, TOAN LE, QUANG NGUYEN, DANH-DU DOAN, BINH NGUYEN, DO LE-HUU, NGUYEN LE-DUY, HUY TRAN, KHANH DUY NGUYEN and KHANG NGUYEN",
      publisher: "IEEE Access - Jan 2024",
      image: imgIeee,
      links: {
        pdf: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10453557",
        manuscript: "https://ieeexplore.ieee.org/abstract/document/10453557/",
        code: "",
      },
    },
  ];

  return (
    <section>
      <Container id="publications" className="publication">
        <h2>Publications</h2>
        <p>
          Besides, I am currently a member of{" "}
          <a href="https://uit-together.github.io/">
            UIT-Together Research Group
          </a>
          , supervised by <a href="https://uit-together.github.io/">Dr. Khang Nguyen</a> and{" "}
          <a href="https://vantam.github.io/">Prof. Tam Nguyen</a> and and{" "}
          <a href="https://github.com/nguyenvd-uit">MSc. Nguyen D. Vo</a>. My
          research interests include Small Detection, Vehicle Detection in
          Aerial Images, UAV vehicle ReID.
        </p>
        <ul className="publication-list">
          {publications.map((pub, index) => (
            <li key={index} className="publication-item">
              <img src={pub.image} alt={pub.title} />
              <div className="publication-info">
                <h3>{pub.title}</h3>
                <p>{pub.authors}</p>
                <div className="publication-publisher">
                  Publisher: {pub.publisher}
                </div>
                <div className="publication-buttons">
                  <a href={pub.links.pdf}>PDF</a>
                  <a href={pub.links.manuscript}>Publish Page</a>
                  <a href={pub.links.code}>Code</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
