import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, Footer } from "./components/index.js";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase.js'

function Layout() {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In")
         navigate('/')
      }else{
        console.log("Logged Out")
        navigate('/login')
      }
    })
  },[])

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
