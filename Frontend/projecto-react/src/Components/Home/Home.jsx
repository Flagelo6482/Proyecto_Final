import React from 'react'
import './Home.css'
import { Header } from '../Header/Header'
import { News } from '../News/News'
import { Footer } from '../Footer/Footer'


export const Home = () => {
  return (
    <>
        <Header />
        <News />
        <Footer />
    </>
  )
}