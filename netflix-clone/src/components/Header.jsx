import React,{useEffect, useState,useRef} from 'react'
import { logo,notification, search,user,caret} from '../assets/index.js'
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom'




const Header = () => {
    const [label,setLabel] = useState("");
    const navRef = useRef();
    useEffect(() =>{
      window.addEventListener('scroll',() =>{
        if(window.scrollY >= 80){
          navRef.current.classList.add('nav-dark')
        }else{
          navRef.current.classList.remove('nav-dark')
        }
      })
    },[])

  return (
    <>
     <Helmet>    
      <title>{label}</title>
      <meta
      name="description"
      content={``}>
      </meta>
      </Helmet>
    <div className="bg w-full px-[50px] z-[1] bg  flex justify-between fixed text-sm
    bg"  ref={navRef}>
        <div className=' flex items-center gap-[50px] '>
            <img src={logo} alt="Netflix logo"
            className='h-[25px] ml-[25px] my-[20px]'></img>
            <ul className='flex gap-[20px]'>
            <Link to="/"><li className='cursor-pointer hover:text-[#b3b3b3]' onClick={() => setLabel("Home - Netflix")}>Home</li></Link> 
            <Link to="/tvshows"><li className='cursor-pointer  hover:text-[#b3b3b3] '  onClick={() => setLabel("TV Shows - Netflix")}>TV Shows</li></Link>
               <Link to="/movies"><li className='cursor-pointer  hover:text-[#b3b3b3] '   onClick={() => setLabel("Movies - Netflix")}>Movies</li></Link> 
              <Link to="/new&popular">  <li className='cursor-pointer  hover:text-[#b3b3b3] '  onClick={() => setLabel("New & Popular - Netflix")}>New & Popular</li></Link>
              <Link to="/mylist"> <li className='cursor-pointer  hover:text-[#b3b3b3]  '  onClick={() => setLabel("My List - Netflix")}>My List</li></Link>
               <Link to="/browserbylanguages"> <li className='cursor-pointer  hover:text-[#b3b3b3] '  onClick={() => setLabel("Browse by Languages - Netflix")}>Browse by Languages</li></Link>
            </ul>
        </div>
        <div className=' flex gap-[20px] items-center'>
            <img src={search} alt="search icon" className='cursor-pointer'></img>
            <p>Children</p>
            <img src={notification} alt="notification icon" className='cursor-pointer'></img>
            <div className="flex gap-[5px] items-center">
                <img src={user} alt="" className='w-[32px] h-[32px] cursor-pointer rounded'></img>
                <img src={caret} className='w-[16px] h-[16px]'></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
