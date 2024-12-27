import React, { useState } from 'react';
import { LeftOutline, LeftOutlined, RightOutlined } from "@ant-design/icons";

const Banner = () => {

    const Slides = [
        {
            id: 1,
            img: 'https://assets.tatacliq.com/medias/sys_master/images/63194329350174.jpg',
        },
        {
            id: 2,
            img: 'https://assets.tatacliq.com/medias/sys_master/images/63194329088030.jpg',
        },
        {
            id: 3,
            img: 'https://assets.tatacliq.com/medias/sys_master/images/63194329481246.jpg',
        },
    ]

    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % Slides.length);
    }

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? Slides.length - 1 : prevIndex - 1
        );
    }

    return (
        <>
            <div>
                <div>
                    <a href="#">
                    <img
                        src={Slides[index].img}
                        alt=""
                        className=''
                    />
                    </a>
                </div>

                <div className='absolute top-64 left-6 bg-gray-300 p-2 px-3 rounded-full text-xl shadow-md'>
                    <button
                        onClick={nextSlide}
                    >
                        <LeftOutlined />
                    </button>
                </div>

                <div className='absolute top-64 right-6 bg-gray-300 p-2 px-3 rounded-full text-xl shadow-md'>
                    <button
                        onClick={prevSlide}
                    >
                        <RightOutlined />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Banner