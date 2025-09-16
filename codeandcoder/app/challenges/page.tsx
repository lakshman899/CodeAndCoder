import React from 'react'
import Navbar from '../../components/navbar';
import Challenges from '../../components/challenges';
import Footer from '../../components/footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <Challenges />
      <Footer />
    </div>
  )
}

export default page;