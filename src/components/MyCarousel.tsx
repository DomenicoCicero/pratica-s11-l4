import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SingleNewInterface } from "../interfaces/SingleNew";
import { useEffect, useState } from "react";
import SingleNew from "./SingleNew";
import { Link } from "react-router-dom";

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

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
      <h1 className="text-center mb-4 text-white">Space News</h1>
      <Row>
        <div className="slider-container">
          <Slider {...settings}>
            {news.map(singleNew => {
              return (
                <div key={singleNew.id} className="px-2">
                  <Link to={`/new/${singleNew.id}`} className="nav-link">
                    <SingleNew newDetails={singleNew} />
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </Row>
    </Container>
  );
};

export default MyCarousel;
