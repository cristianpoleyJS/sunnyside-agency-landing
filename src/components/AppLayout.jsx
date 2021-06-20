import React from 'react'
import Header from './Header.jsx'
import Mosaic from './Mosaic.jsx'
import Clients from './Clients.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'

export default function AppLayout() {
  return (
    <>
        <Header />
        <Mosaic />
        <Clients />
        <Gallery />
        <Footer />
    </>
  )
}
