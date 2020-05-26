import React, { useEffect, useState } from "react";
import { Carousel as CarouselPlugin } from "react-responsive-carousel";

import api, { storageUrl } from "../../../../services/api";
import newsTag from "../../../../assets/images/news.png";

import SideTag from "../../../../components/SideTag";

import { Container, CarouselDiv } from "./styles";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get("/news").then((response) => {
      setNews(response.data);
    });
  }, []);

  return (
    <Container id="news">
      {news && (
        <>
          <SideTag side="left">
            <strong>NEWS</strong>
          </SideTag>
          <CarouselPlugin showThumbs={false} showStatus={false}>
            {news.map(({ id, title, image, text }) => (
              <CarouselDiv key={id}>
                <div></div>
                <img src={`${storageUrl}/${image}`} alt="First" />
                <h1>{title}</h1>
                <pre dangerouslySetInnerHTML={{ __html: text }}></pre>
              </CarouselDiv>
            ))}
          </CarouselPlugin>
        </>
      )}
    </Container>
  );
}

export default News;
