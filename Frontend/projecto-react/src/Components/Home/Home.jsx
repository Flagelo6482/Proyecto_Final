import React from 'react'
import './Home.css'
import { Header } from '../Header/Header'
import { News } from '../News/News'
import { Footer } from '../Footer/Footer'
import { Login } from '../Login/Login'
// import { games } from '../games/games'

export const Home = () => {
  return (
    <>
        <Header />
        {/* <games /> */}
        <News />
        <Footer />
        {/* <Login /> */}
    </>
  )
}