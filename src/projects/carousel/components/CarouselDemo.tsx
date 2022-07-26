import React from 'react';

import './CarouselDemo.scss';

import { Carousel } from 'react-bootstrap';

export const CarouselDemo: React.FC = () => {
  return (
    <Carousel interval={null} className="carousel">
      <Carousel.Item key="0">
        <img src="https://picsum.photos/320/240?random=0" alt="first image" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key="1">
        <img src="https://picsum.photos/320/240?random=1" alt="first image" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key="2">
        <img src="https://picsum.photos/320/240?random=2" alt="first image" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselDemo;
