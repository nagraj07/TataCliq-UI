import React from 'react'

const Category = () => {

    const Data = [
        {
            id: 1,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917206046.png"
        },
        {
            id: 2,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917271582.png"
        },
        {
            id: 3,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917337118.png"
        },
        {
            id: 4,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917402654.png"
        },
        {
            id: 5,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917468190.png"
        },
        {
            id: 6,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917533726.png"
        },
        {
            id: 7,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917599262.png"
        },
        {
            id: 8,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917664798.png"
        },
        {
            id: 9,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917730334.png"
        },
        {
            id: 10,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917795870.png"
        },
        {
            id: 11,
            img: "https://assets.tatacliq.com/medias/sys_master/images/62926917861406.png"
        },
    ]

    return (
        <>
            <div className='w-full bg-gray-200'>
                <div className='flex justify-around py-8'>
                    {Data.map((item) => (
                        <img key={item.id} src={item.img} alt={`category${item.id}`} className='w-24 rounded-lg' />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Category