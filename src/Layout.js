import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './component/ScrollToTop'

export default function Layout() {
  return (
    <>
        <Header/>
        <ScrollToTop />
        <Outlet/>
        <Footer/>
    </>
  )
}
