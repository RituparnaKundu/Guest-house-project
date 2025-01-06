import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import one from '../assets/one.jpg';
import ayodhya from '../assets/ayodhya.webp';
import baranti from '../assets/baranti.webp';
import flower from '../assets/flower.jpg';
import large from '../assets/large.jpg';
import palash from '../assets/palash.webp';
import room1 from '../assets/room1.jpg';
import './gallery.css';
const Gallery = () => {
  // Define gallery images with both original and thumbnail URLs
  const galleryImages = [
    {
      original: one,
      thumbnail: one,
    },
    {
      original: ayodhya,
      thumbnail: ayodhya,
    },
    {
      original: baranti,
      thumbnail: baranti,
    },
    {
      original: flower,
      thumbnail: flower,
    },
    {
      original: large,
      thumbnail: large,
    },
    {
      original: palash,
      thumbnail: palash,
    },
    {
      original: room1,
      thumbnail: room1,
    },
  ];

  return (
    <div className="gallery-section">
      <h2 className="section-heading">Our Gallery</h2>
      <ImageGallery
        items={galleryImages}
        showThumbnails={true} 
        showPlayButton={true} 
        showFullscreenButton={true} 
        autoPlay={true} 
        slideInterval={3000}
        lazyLoad={true}
        thumbnailPosition="bottom" 
      />
    </div>
  );
};

export default Gallery;
