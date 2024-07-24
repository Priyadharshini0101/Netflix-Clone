import React from 'react'
import { facebook, instagram,twitter,youtube } from '../assets/index'

function Footer() {
  return (
    <div className='flex justify-center'>
    <div className='max-w-[1000px]  mx-0 my-auto px-[30px] py-[4%]'>
        <div className='flex  gap-[20px] mx-[10px] my-[10px]'>
        <a href="https://www.facebook.com/NetflixIN/" target="_blank">
        <img src={facebook} className='w-[30px] cursor-pointer '></img>
        </a>
        <a href="https://www.instagram.com/Netflix_IN/" target="_blank">
        <img src={instagram}></img>
        </a>
        <a href="https://x.com/netflixindia" target="_blank">
        <img src={twitter}></img>
        </a>
        <a href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg" target='_blank'>
        <img src={youtube}></img>
        </a>
        </div>
        <ul className='grid gap-y-[10px]  grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-x-[100px] mb-[30px] text-[13px] text-[#808080]'>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
        <p className='text-[#808080] text-[11px]'>1997 - 2023 Netflix, Inc.</p>
    </div>
    </div>

  )
}

export default Footer