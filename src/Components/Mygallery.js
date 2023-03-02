import ImageGallery from 'react-image-gallery';
import React from 'react';
const images = [
  {
    original: 'images/slider/1.jpg',
    thumbnail: 'images/slider/1.jpg',
  },
  {
    original: 'images/slider/2.jpg',
    thumbnail: 'images/slider/2.jpg',
  },
  {
    original: 'images/slider/3.jpg',
    thumbnail: 'images/slider/3.jpg',
  },
  {
    original: 'images/slider/4.webp',
    thumbnail: 'images/slider/4.webp',
  },
  {
    original: 'images/slider/5.jpg',
    thumbnail: 'images/slider/5.jpg',
  },
  {
    original: 'images/slider/6.jpg',
    thumbnail: 'images/slider/6.jpg',
  },
  {
    original: 'images/slider/7.jpg',
    thumbnail: 'images/slider/7.jpg',
  },
  {
    original: 'images/slider/8.jpg',
    thumbnail: 'images/slider/8.jpg',
  },
  {
    original: 'images/slider/9.webp',
    thumbnail: 'images/slider/9.webp',
  },
  {
    original: 'images/slider/10.jpg',
    thumbnail: 'images/slider/10.jpg',
  },
];

export default class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}