import React from 'react'
import Header from './component/header/Header'
import SocialBar from './component/SocialBar/SocialBar'
import Footer from './component/footer/Footer'
import Home from './component/home/Home.jsx'
import Container from './component/layout/Container'
import Introduce from './component/Introduce/Introduce'
import './App.scss'

function App() {
  return (
    <>
      <SocialBar />
      <Container>
        <Header />
        <Home />
        <Introduce />
        <Footer />
      </Container>
    </>
  )
}

export default App
