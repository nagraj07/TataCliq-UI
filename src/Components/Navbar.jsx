import React, { useState } from 'react'
import {  BellOutlined, BookOutlined, CloseOutlined, DownOutlined, GiftOutlined, HeartOutlined, MoneyCollectOutlined, PhoneOutlined, ProfileFilled, ProfileOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <div className='flex bg-black text-white w-full py-2 px-10 '>

                <div className='w-2/12 py-4'>
                    <img
                        src="https://www.tatacliq.com/src/mobile-number-login/images/TCF_logo_black.svg"
                        alt=""
                        className='bg-gray-50 w-40 h-14'
                    />
                </div>

                <div className='w-10/12 space-y-6 mt-2 font-bold'>
                    <div className='flex justify-between text-xs'>
                        <div>
                            <a href="tatacliq">Tata CLiQ Luxury</a>
                        </div>

                        <div className='gap-6 flex'>
                            <a href="cliqcash">CLiQ Cash</a>
                            <a href="giftcard">Gift Card</a>
                            <a href="cliqcare">CLiQ Care</a>
                            <a href="trackorders">Track Orders</a>
                            <button onClick={() => setVisible(true)}>Sign in / Sign Up</button>
                        </div>
                    </div>

                    <dialog 
                        open={visible} onClose={() => setVisible(false)}
                        className='absulate left-auto right-6 top-4 border shadow-lg'
                    >
                        <div className='flex flex-col items-start bg-white p-6 gap-4 font-semibold'>
                            <CloseOutlined 
                                className='absolute top-1 text-xs right-2'
                                onClick={() => setVisible(false)}
                            />
                            <button className='bg-red-500 py-2 px-4 rounded-full text-white'>Login/Register</button>
                            <button><UserOutlined /> My Account</button>
                            <button><BookOutlined /> Order History</button>
                            <button><HeartOutlined /> My Wishlist</button>
                            <button><BellOutlined /> Alert & Coupon</button>
                            <button><GiftOutlined /> My Gifts</button>
                            <button><MoneyCollectOutlined /> Cliq Cash</button>
                        </div>
                    </dialog>

                    <div className='flex space-x-12 font-semibold'>
                        <a href="category"><h3 className='flex'>Category <DownOutlined className='mt-1 text-sm font-bold' /></h3></a>
                        <a href="brands"><h3 className='flex'>Brands <DownOutlined className='mt-1 text-sm font-bold' /></h3></a>

                        <div className='w-full h-10 flex bg-slate-600 rounded-md'>
                            <SearchOutlined className='px-3 text-lg ' />
                            <input
                                type="search"
                                name=""
                                id=""
                                placeholder='Search for Products'
                                className='w-full bg-transparent outline-none text-white'
                            />
                        </div>

                        <a href="wishlist"><HeartOutlined className='text-lg' /></a>
                        <a href="cartpage"><ShoppingCartOutlined className='text-lg' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar