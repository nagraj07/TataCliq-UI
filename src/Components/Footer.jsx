import { AndroidFilled, AntDesignOutlined, AppleFilled, FacebookFilled, InstagramFilled, LinkedinFilled, PayCircleOutlined, RightOutlined, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                <div className='flex justify-center '>
                    <div className='flex justify-around bg-gradient-to-b from-red-100 via-red-50 to-white rounded-lg space-x-10 px-20'>
                        <p className='justify-items-center p-4'>
                            <AntDesignOutlined className='text-3xl' />
                            <h6>Authentic</h6>
                            <h6>Brands</h6>
                        </p>
                        <p className='justify-items-center p-4'>
                            <AntDesignOutlined className='text-3xl' />
                            <h6>Easy</h6>
                            <h6>Returns</h6>
                        </p>
                        <p className='justify-items-center p-4'>
                            <PayCircleOutlined className='text-3xl' />
                            <h6>Easy</h6>
                            <h6>Payments</h6>
                        </p>
                    </div>
                </div>

                <div>
                    <footer className='py-2'>
                        <div className="p-10 text-[#333] flex flex-wrap justify-between">

                            <div className="flex-1 p-2 min-w-[200px]">
                                <h3 className="text-md font-semibold mb-2">Tata MarketPlace</h3>
                                <ul className="list-none p-0">
                                    <li className="mb-2"><a href="/about" className="hover:text-black">About Us</a></li>
                                    <li className="mb-2"><a href="/careers" className="hover:text-black">Careers</a></li>
                                    <li className="mb-2"><a href="/sell" className="hover:text-black">Sell With Us</a></li>
                                    <li className="mb-2"><a href="/terms" className="hover:text-black">Terms of Use</a></li>
                                    <li className="mb-2"><a href="/privacy" className="hover:text-black">Privacy Policy</a></li>
                                    <li className="mb-2"><a href="/affiliates" className="hover:text-black">Affiliates</a></li>
                                    <li className="mb-2"><a href="/sitemap" className="hover:text-black">Sitemap</a></li>
                                </ul>
                            </div>

                            <div className="flex-1 p-2 min-w-[200px]">
                                <h3 className="text-md font-semibold mb-2">Customer Service</h3>
                                <ul className="list-none p-0">
                                    <li className="mb-2"><a href="/shopping" className="hover:text-black">Shopping</a></li>
                                    <li className="mb-2"><a href="/offers" className="hover:text-black">Offers & Promotions</a></li>
                                    <li className="mb-2"><a href="/payments" className="hover:text-black">Payments</a></li>
                                    <li className="mb-2"><a href="/cancellation" className="hover:text-black">Cancellation</a></li>
                                    <li className="mb-2"><a href="/returns" className="hover:text-black">Returns & Refunds</a></li>
                                    <li className="mb-2"><a href="/cliq-and-piq" className="hover:text-black">CliQ And PiQ</a></li>
                                    <li className="mb-2"><a href="/returns-policy" className="hover:text-black">Returns Policy</a></li>
                                    <li className="mb-2"><a href="/electronics-returns" className="hover:text-black">Electronics Return Policy</a></li>
                                    <li className="mb-2"><a href="/contact" className="hover:text-black">Contact Us</a></li>
                                    <li className="mb-2"><a href="/reviews-guidelines" className="hover:text-black">Reviews Guidelines</a></li>
                                    <li className="mb-2"><a href="/furniture-returns" className="hover:text-black">Furniture Return Policy</a></li>
                                    <li className="mb-2"><a href="/replacement-policy" className="hover:text-black">Replacement Policy</a></li>
                                </ul>
                            </div>

                            <div className="flex-1 p-2 min-w-[200px]">
                                <h3 className="text-md font-semibold mb-2">My Tata CLiQ</h3>
                                <ul className="list-none p-0">
                                    <li className="mb-2"><a href="/my-account" className="hover:text-black">My Account</a></li>
                                    <li className="mb-2"><a href="/my-orders" className="hover:text-black">My Orders</a></li>
                                    <li className="mb-2"><a href="/my-shopping-bag" className="hover:text-black">My Shopping Bag</a></li>
                                    <li className="mb-2"><a href="/my-wishlist" className="hover:text-black">My Wishlist</a></li>
                                </ul>
                            </div>

                            <div className="flex-1 p-2 min-w-[500px]">
                                <h3 className="text-md font-semibold mb-2">Tata CLiQ Offerings</h3>
                                <ul className="text-sm space-y-2">
                                    <li className="flex flex-wrap gap-x-4 gap-y-2">
                                        <a href="/watches-for-men" className="hover:text-red-500">Watches for Men</a> |
                                        <a href="/campus-shoes" className="hover:text-red-500">Campus Shoes</a> |
                                        <a href="/sandals-for-men" className="hover:text-red-500">Sandals for Men</a> |
                                        <a href="/sneakers-for-men" className="hover:text-red-500">Sneakers for Men</a> |
                                        <a href="/reebok-shoes" className="hover:text-red-500">Reebok Shoes</a> |
                                        <a href="/cotton-kurtis" className="hover:text-red-500">Cotton Kurtis</a> |
                                        <a href="/woodland-shoes" className="hover:text-red-500">Woodland Shoes</a> |
                                        <a href="/jumpsuits" className="hover:text-red-500">Jumpsuits</a> |
                                        <a href="/allen-solly" className="hover:text-red-500">Allen Solly</a> |
                                        <a href="/sparx-shoes" className="hover:text-red-500">Sparx Shoes</a> |
                                        <a href="/gold-rings" className="hover:text-red-500">Gold Rings</a> |
                                        <a href="/formal-shoes-for-men" className="hover:text-red-500">Formal Shoes for Men</a> |
                                        <a href="/sports-shoes-for-men" className="hover:text-red-500">Sports Shoes for Men</a> |
                                        <a href="/wallets-for-men" className="hover:text-red-500">Wallets for Men</a> |
                                        <a href="/ladies-watches" className="hover:text-red-500">Ladies Watches</a> |
                                        <a href="/trolley-bags" className="hover:text-red-500">Trolley Bags</a> |
                                        <a href="/handbags-for-women" className="hover:text-red-500">Handbags for Women</a> |
                                        <a href="/sling-bags-for-women" className="hover:text-red-500">Sling Bags for Women</a> |
                                        <a href="/casual-shoes-for-men" className="hover:text-red-500">Casual Shoes for Men</a> |
                                        <a href="/boots-for-men" className="hover:text-red-500">Boots for Men</a> |
                                        <a href="/digital-watches" className="hover:text-red-500">Digital Watches</a> |
                                        <a href="/sonata-watches" className="hover:text-red-500">Sonata Watches</a> |
                                        <a href="/sneakers-for-women" className="hover:text-red-500">Sneakers for Women</a> |
                                        <a href="/running-shoes" className="hover:text-red-500">Running Shoes</a> |
                                        <a href="/puma-shoes" className="hover:text-red-500">Puma Shoes</a> |
                                        <a href="/boots-for-women" className="hover:text-red-500">Boots for Women</a> |
                                        <a href="/skechers" className="hover:text-red-500">Skechers</a> |
                                        <a href="/malabargold" className="hover:text-red-500">Malabargold</a> |
                                        <a href="/fabindia" className="hover:text-red-500">Fabindia</a> |
                                        <a href="/utsa" className="hover:text-red-500">Utsa</a> |
                                        <a href="/vark" className="hover:text-red-500">Vark</a> |
                                        <a href="/gia" className="hover:text-red-500">Gia</a> |
                                        <a href="/lov" className="hover:text-red-500">LOV</a> |
                                        <a href="/sitemap" className="hover:text-red-500">Sitemap</a>
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div className='bg-gray-100 p-6 py-10 flex justify-between flex-wrap'>
                            <div className='space-x-2'>
                                <text>DownloadApp</text>
                                <AndroidFilled />
                                <AppleFilled />
                            </div>
                            <div className="flex min-w-[200px]">
                                <div className="flex gap-4">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><FacebookFilled /></a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><TwitterOutlined /></a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><InstagramFilled /></a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><YoutubeFilled /></a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-black"><LinkedinFilled /></a>
                                </div>
                            </div>
                            <div className='text-sm'>
                                <span>&copy;</span>2024 TATA CLIQ | <span>All Rights Reserved</span>
                            </div>
                        </div>

                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer