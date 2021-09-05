import React from "react";
import { Carousel } from "react-bootstrap";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import chaudieres from "../images/chaudieres.jpg";

function Home() {
  return (
    <div id="home" className="home">
      <div>
        <h1>Bienvenu à S.M.C.I</h1>
        <h2>Societé Maintenance Circuit Industrielle</h2>
      </div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={chaudieres} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={photo2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={photo1} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
