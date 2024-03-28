import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { SingleNewInterface } from "../interfaces/SingleNew";
import { useEffect, useState } from "react";

const DetailsNew = () => {
  const [singleNew, setSingleNew] = useState<SingleNewInterface | null>(null);

  const params = useParams();

  const getNew = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("problema nel reperimento dei dati");
        }
      })
      .then((singleNew: SingleNewInterface) => {
        console.log(singleNew);
        setSingleNew(singleNew);
      })
      .catch(err => {
        console.log("ERRORE", err);
      });
  };

  useEffect(() => {
    getNew();
  }, []);

  return (
    <Container className="">
      <Row className="justify-content-center">
        <Col xs={10}>
          {singleNew && (
            <Card className="my-3">
              <Card.Img variant="top" src={singleNew?.image_url} />
              <Card.Body>
                <Card.Text className="fst-italic">{singleNew?.news_site}</Card.Text>
                <Card.Title className="text-center mb-3 summary">{singleNew?.title}</Card.Title>
                <Card.Text style={{ marginBlockEnd: "40px" }}>{singleNew?.summary}</Card.Text>
                <Card.Text>
                  <span className="fw-bold d-block">Published: </span> {singleNew?.published_at.substring(0, 10)}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold d-block">Updated: </span>
                  {singleNew?.updated_at.substring(0, 10)}
                </Card.Text>
                <Card.Text>
                  <a href={singleNew?.url} target="_blanck">
                    Scopri di più
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsNew;
