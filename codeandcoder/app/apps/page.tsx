import React from 'react'
import Navbar from '../../components/navbar'
import Apps from '../../components/apps'
import AppsTwo from '../../components/appstwo'
import AppsThree from '../../components/appsthree'
import Footer from '../../components/footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Apps />
      <AppsTwo />
      <AppsThree />
      <Footer />
    </div>
  )
}

export default page;
