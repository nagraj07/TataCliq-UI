import React from 'react'

const BankDetails = () => {

  const Data = [
           {
              id : 1,
              img : "https://assets.tatacliq.com/medias/sys_master/images/63194330923038.jpg"
           },
           {
              id : 1,
              img : "https://assets.tatacliq.com/medias/sys_master/images/63194330988574.jpg"
           },
           {
              id : 1,
              img : "https://assets.tatacliq.com/medias/sys_master/images/63194331054110.jpg"
           },
           {
              id : 1,
              img : "https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg"
           },
           {
              id : 1,
              img : "https://assets.tatacliq.com/medias/sys_master/images/62309792808990.jpg"
           },
           {
              id : 1,
              img : "https://assets.tatacliq.com/medias/sys_master/images/62842086555678.jpg"
           },

  ]

  return (
    <>
      <div className='flex justify-around py-6 pb-10 bg-gray-200'>
        {Data.map((item) => (
          <img key={item.id} src={item.img} alt={`category${item.id}`} className='w-48 rounded-md' />
        ))}
      </div>
    </>
  )
}

export default BankDetails