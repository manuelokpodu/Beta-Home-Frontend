import React from 'react'
import Headeer from '../components/HomeComponents/Headeer'
import Properties from '../components/HomeComponents/Properties'
import Popular from '../components/HomeComponents/Popular'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Headeer/>
      <Properties/>
      <Popular/>
      <Footer/>
    </div>
  )
}

export default Homepage