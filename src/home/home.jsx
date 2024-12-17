import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./home.css"
import HomePage from './workspaces';
import Search from './search';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const slides = [
    {
      id: 1,
      image: "https://wallpapers.com/images/hd/1440p-office-background-moxlaqgqudmz5dk7.jpg",
      label: "Find Flexible Workspaces",
      description: "Discover spaces that adapt to your needs.",
      points: [
        "Quiet and productive environments",
        "Affordable daily or monthly options",
        "Convenient locations near you"
      ],
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
      label: "Boost Your Productivity",
      description: "Work smarter in fully equipped spaces.",
      points: [
        "High-speed WiFi and amenities",
        "Collaborative spaces for team projects",
        "Private rooms for focused work"
      ],
    },
    {
      id: 3,
      image: "https://png.pngtree.com/background/20230525/original/pngtree-room-for-home-office-picture-image_2739797.jpg",
      label: "Work and Connect",
      description: "Network with like-minded professionals.",
      points: [
        "Meet and collaborate with peers",
        "Host events or workshops",
        "Flexible booking for any occasion"
      ],
    },
  ];
  
  return (
    <>
    
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-container" id='home'>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100 carousel-image"
            src={slide.image}
            alt={slide.label}
          />
          <Carousel.Caption>
            <h3>{slide.label}</h3>
            <p>{slide.description}</p>
            <ul>
              {slide.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    <Search/>
    <HomePage/>
    </>
  );  
}
export default Home;
