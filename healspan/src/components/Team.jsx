import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TeamCard from './TeamCard';
import img1 from "../assets/Sabarinath.png"
import img2 from "../assets/Abhishek.jpg"
import img3 from "../assets/Manjula.jpg"


const Team = () => {
  const isMobileOrTablet = window.innerWidth <= 1024;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dataTeam = [
    {
      id: 1,
      image: img1,
      name: 'Sabarinath U',
      url: 'https://www.linkedin.com/in/sabarinath-u-8b1a1896/',
      designation: 'Co-founder',
      exp: ' Ex- Deputy Director Myntra | XLRI Jamshedpur',
    },
    {
      id: 2,
      image: img2,
      name: 'Abhishek',
      url: 'https://www.linkedin.com/in/healspan/',
      designation: 'Co-founder',
      exp: '  Ex- Assistant V.P Prudent Insurance Brokers | Leadership',
    },
    
    {
      id: 3,
      image: img3,
      name: 'Manjula Jayaram',
      url: 'https://www.linkedin.com/in/manjula-jayaram-5a7543173/',
      designation: 'Director',
      exp: ' Ex- Operations Head Mediassist | 30+ Years in Health Industry',
    },
    
    
  ];

  const data = dataTeam.map((item) => (
    <TeamCard
      key={item.id}
      image={item.image}
      name={item.name}
      url={item.url}
      designation={item.designation}
      exp={item.exp}
    />
  ));

  return (
    <>
    {isMobileOrTablet ? (  
    <div className='' >
      <Carousel responsive={responsive}>{data}</Carousel>
    </div>
    ) : ( 
    <div className='rounded-xl  flex flex-row justify-center items-center flex-wrap gap-[80px]'>
    {window.innerWidth > 768 && (
      <div className=' flex flex-row justify-center items-center flex-wrap gap-[130px]'>
        {data}
      </div>
    )}

    </div>
    )}
    </>
  );
};

export default Team;
