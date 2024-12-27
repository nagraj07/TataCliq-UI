import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Category from './Components/Category'
import BankDetails from './Components/BankDetails'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Sectionlast from './Components/Sectionlast'
import Footer from './Components/Footer'
import DetailsSec from './Components/DetailsSec'
import Section4 from './Components/Section4'
import Section5 from './Components/Section5'
import Section6 from './Components/Section6'
import Section7 from './Components/Section7'

const App = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Category/>
        <BankDetails/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        {/* <Section7/> */}
        <Sectionlast/>
        <Footer/>
        <DetailsSec/>
    </>
  )
}

export default App