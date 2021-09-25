import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';
import four from '../../assets/four.jpg';

const images = [
  {
    img: one,
  },
  {
    img: two,
  },

  {
    img: four,
  },

  {
    img: three,
  },
];

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      interval={3000}
    >
      {images.map((image, i) => (
        <Carousel.Item
          key={i}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        >
          <img
            src={image.img}
            alt="First slide"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
