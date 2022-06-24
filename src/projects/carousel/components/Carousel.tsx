import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css';

const IMAGE_WIDTH = 320;

export const Carousel: React.FC = () => {
  const images: string[] = Array(5)
    .fill(["https://picsum.photos/320/240?random="])
    .map((src, i) => src + i);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ref: any = useRef(null);
  useEffect(() => {
    if (ref && ref.current && ref.current.style) {
      ref.current.style.transform = `translate(${
        IMAGE_WIDTH * -activeIndex
      }px,0)`;
    }
  }, [activeIndex]);
  
  const generateImages = (images: string[]) => {
    return images.map((img : string, index: number) => {
      return (
        <div className="carousel__image-wrapper" key={index}>
          <img
            className="carousel__image"
            data-index={index}
            src={img}
            alt="carousel image"
          />
        </div>
      );
    })
  };
  
  return (
    <div className="carousel">
      <div className="carousel__window">
        <div className="carousel__images" ref={ref}>
          {generateImages(images)}
        </div>
        <div className="carousel__controls">
          <div
            className="carousel__control"
            data-control="left"
            role="button"
            onClick={() => {
              if (activeIndex === 0) {
                return;
              }
              setActiveIndex(activeIndex - 1);
            }}
          >
            ←
          </div>
          <div
            className="carousel__control"
            data-control="right"
            role="button"
            onClick={() => {
              if (activeIndex === 4) {
                return;
              }
              setActiveIndex(activeIndex + 1);
            }}
          >
            →
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;