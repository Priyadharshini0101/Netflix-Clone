import React from "react";
import { facebook, instagram, twitter, youtube } from "../assets/index";

function Footer() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1000px]  mx-0 my-auto px-[30px] py-[4%]">
        <div className="flex  gap-[20px] mx-[10px] my-[10px]">
          <a href="https://www.facebook.com/NetflixIN/" target="_blank">
            <img src={facebook} className="w-[30px] cursor-pointer "></img>
          </a>
          <a href="https://www.instagram.com/Netflix_IN/" target="_blank">
            <img src={instagram}></img>
          </a>
          <a href="https://x.com/netflixindia" target="_blank">
            <img src={twitter}></img>
          </a>
          <a href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg" target="_blank">
            <img src={youtube}></img>
          </a>
        </div>
        <ul className="grid gap-y-[10px] grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-x-[100px] mb-[30px] text-[13px] text-[#808080] xs:grid-cols-1">
          <li className="hover:underline  ">Audio Description</li>
          <li className="hover:underline  ">Help Center</li>
          <li className="hover:underline  ">Gift Cards</li>
          <li className="hover:underline  ">Media Centre</li>
          <li className="hover:underline  ">Investor Relations</li>
          <li className="hover:underline  ">Jobs</li>
          <li className="hover:underline  ">Terms of Use</li>
          <li className="hover:underline  ">Privacy</li>
          <li  className="hover:underline  ">Legal Notices</li>
          <li  className="hover:underline  ">Cookie Preferences</li>
          <li  className="hover:underline  ">Corporate Information</li>
          <li  className="hover:underline  ">Contact Us</li>
        </ul>
        <p className="text-[#808080] text-[11px]">&copy; 1997 - 2023 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
