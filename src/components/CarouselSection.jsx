import React from 'react';
import Slider from 'react-slick';
import slide1 from '../assets/carousel/1.png';
import slide2 from '../assets/carousel/2.png';
import slide3 from '../assets/carousel/2.png';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" className="w-full border-none outline-none" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" className="w-full border-none outline-none" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" className="w-full border-none outline-none" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
