import React from "react";

import { Container } from "./styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselPlugin } from "react-responsive-carousel";

import firstImage from "../../assets/images/main.jpg";
import secondImage from "../../assets/images/main-2.jpg";

export default function Carousel() {
  return (
    <Container id="home">
      <CarouselPlugin showThumbs={false} showStatus={false}>
        <div>
          <img src={firstImage} alt="First" />
        </div>
        <div>
          <img src={secondImage} alt="Second" />
        </div>
      </CarouselPlugin>
    </Container>
  );
}
