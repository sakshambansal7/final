import React from 'react'
import Navbar from './Navbar';
import Page1 from './Page1';
import Insta from './Insta';
import Footer from './Footer';
import  './Home.css'

const Home = () => {
  return (
    <>
     <Navbar className='z-50' />
      <Page1/>
      <Insta/>
      <Footer/>
    </>

  )
}

export default Home