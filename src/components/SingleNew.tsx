import Card from "react-bootstrap/Card";
import { SingleNewInterface } from "../interfaces/SingleNew";

interface NewProps {
  newDetails: SingleNewInterface;
}

const SingleNew = (props: NewProps) => {
  const title =
    props.newDetails.title.length < 51 ? props.newDetails.title : props.newDetails.title.substring(0, 45) + "...";

  const summary =
    props.newDetails.summary.length < 101
      ? props.newDetails.summary
      : props.newDetails.summary.substring(0, 99) + "...";

  return (
    <Card className="my-3">
      <Card.Img variant="top" src={props.newDetails.image_url} className="card-img-dim" />
      <Card.Body>
        <Card.Text className="fst-italic">{props.newDetails.news_site}</Card.Text>
        <Card.Title className="text-center mb-3 summary">{title}</Card.Title>
        <Card.Text style={{ height: "100px", marginBlockEnd: "40px" }}>{summary}</Card.Text>
        <Card.Text>
          <span className="fw-bold d-block">Published: </span> {props.newDetails.published_at.substring(0, 10)}
        </Card.Text>
        <Card.Text>
          <span className="fw-bold d-block">Updated: </span>
          {props.newDetails.updated_at.substring(0, 10)}
        </Card.Text>
        <Card.Text>
          <a href={props.newDetails.url} target="_blanck">
            Scopri di più
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleNew;
