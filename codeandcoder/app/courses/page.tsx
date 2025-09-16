import React from 'react'
import Navbar from '../../components/navbar';
import Courses from '../../components/courses';
import Footer from '../../components/footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <Courses />
      <Footer />
    </div>
  )
}

export default page;
