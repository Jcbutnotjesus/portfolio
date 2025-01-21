/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Slider from 'react-slick';
import './carousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
  };

  return (
    <div className="carousel-component">
      <Slider {...settings} className="carousel">
        <div className="carousel-image-container">
          <img
            src="https://www.francetvinfo.fr/pictures/KI83JKIWxYVA8ng-cUtYxM6l-z8/1200x1200/2016/08/23/shrek-5.jpg"
            alt="Slide 1"
            className="carousel-image"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>
        <div className="carousel-image-container">
          <img
            src="https://musicart.xboxlive.com/7/39372400-0000-0000-0000-000000000002/504/image.jpg"
            alt="Slide 2"
            className="carousel-image"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>
        <div className="carousel-image-container">
          <img
            src="https://www.francetvinfo.fr/pictures/KI83JKIWxYVA8ng-cUtYxM6l-z8/1200x1200/2016/08/23/shrek-5.jpg"
            alt="Slide 3"
            className="carousel-image"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>
        <div className="carousel-image-container">
          <img
            src="https://www.francetvinfo.fr/pictures/KI83JKIWxYVA8ng-cUtYxM6l-z8/1200x1200/2016/08/23/shrek-5.jpg"
            alt="Slide 4"
            className="carousel-image"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>
        <div className="carousel-image-container">
          <img
            src="https://www.francetvinfo.fr/pictures/KI83JKIWxYVA8ng-cUtYxM6l-z8/1200x1200/2016/08/23/shrek-5.jpg"
            alt="Slide 5"
            className="carousel-image"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
