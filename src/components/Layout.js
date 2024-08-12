import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Preloader from './PreLoader'

export default function Layout(props) {
  return (
    <>
        <div>
            <div  >
                <Header />
               
                <Outlet />
             
                <Footer/>
            </div>
        </div>
    </>
  )
}
