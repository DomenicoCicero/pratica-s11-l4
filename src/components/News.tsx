import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useEffect, useState } from "react";
import { SingleNewInterface } from "../interfaces/SingleNew";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState<SingleNewInterface[]>([]);

  const getNews = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("problema nel reperimento dei dati");
        }
      })
      .then(articles => {
        console.log(articles.results);
        setNews(articles.results);
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <Container className="pt-5">
      {news.map(singleNew => {
        return (
          <Row className="justify-content-center my-3" key={singleNew.id}>
            <Col xs={10} className="text-center">
              <Link to={`/new/${singleNew.id}`} className="nav-link">
                <Card>
                  <Badge bg="warning" className="position-absolute s-0 t-0">
                    Space
                  </Badge>
                  <Card.Img variant="top" src={singleNew.image_url} />
                  <Card.Body>
                    <Card.Text className="fst-italic">{singleNew.news_site}</Card.Text>
                    <Card.Title className="text-center mb-3 summary">{singleNew.title}</Card.Title>
                    <Card.Text style={{ height: "100px", marginBlockEnd: "40px" }}>{singleNew.summary}</Card.Text>
                    <Card.Text className=" text-start">
                      <span className="fw-bold d-block">Published: </span> {singleNew.published_at.substring(0, 10)}
                    </Card.Text>
                    <Card.Text className=" text-start">
                      <span className="fw-bold d-block">Updated: </span>
                      {singleNew.updated_at.substring(0, 10)}
                    </Card.Text>
                    <Card.Text>
                      <a href={singleNew.url} target="_blanck">
                        Scopri di più
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default News;
