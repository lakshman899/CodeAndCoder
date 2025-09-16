import React from 'react'
import Navbar from '../components/navbar';
import Home from '../components/home';
import HomeTwo from '../components/hometwo';
import HomeThree from '../components/homethree';
import HomeFour from '../components/homefour';
import HomeFive from '../components/homefive';
import HomeSix from '../components/homesix';
import Footer from '../components/footer';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
      <HomeFive />
      <HomeSix />
      <Footer />
    </div>
  )
}

export default Page;
