import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {Header,Footer} from './components/index.js'
import { DataContext, DataProvider } from './contexts/data.js'

function Layout() {
  return (
    <><Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Layout