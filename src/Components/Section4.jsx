import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import React, { useState } from 'react';

const Section4 = () => {
  const Slides = [
    {
      id: 1,
      img: "https://assets.tatacliq.com/medias/sys_master/images/63197951950878.jpg"
    },
    {
      id: 2,
      img: "https://assets.tatacliq.com/medias/sys_master/images/63197952147486.jpg"
    },
    {
      id: 3,
      img: "https://assets.tatacliq.com/medias/sys_master/images/63197952278558.jpg"
    },
    {
      id: 4,
      img: "https://assets.tatacliq.com/medias/sys_master/images/63197952344094.jpg"
    },
    {
      id: 5,
      img: "https://assets.tatacliq.com/medias/sys_master/images/63197952409630.jpg"
    },
    {
      id: 6,
      img: "https://assets.tatacliq.com/medias/sys_master/images/63197952475166.jpg"
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (Slides.length - 3)); 
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? Slides.length - 4 : prevIndex - 1)); 
  };

  const imagesToShow = Slides.slice(index, index + 4);

  return (
    <div className='w-full bg-gray-200 py-10'>
      <div className='pt-10'>
        <div className='flex justify-end px-40'>
          <button onClick={prevSlide}>
            <LeftCircleFilled className='w-6 text-3xl m-4 text-gray-400' />
          </button>
          <button onClick={nextSlide}>
            <RightCircleFilled className='w-6 text-3xl m-4 text-gray-400' />
          </button>
        </div>

        <div className='flex justify-around space-x-5 px-36 w-[88%] scroll-m-0 overflow-hidden'>
          {imagesToShow.map((item) => (
            <img key={item.id} src={item.img} className='w-56' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
