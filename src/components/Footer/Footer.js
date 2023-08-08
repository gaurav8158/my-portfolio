import React from 'react'
import { FaTwitter,FaLinkedinIn} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
   <div className='py-20'>
    <div></div>
    <div className='flex justify-between items-center'>
        <div>
            <p>©2023 Portfolio made ❤️ by <span>Gaurav</span></p>
        </div>
        <div className='flex gap-4'>
        <a href="https://twitter.com/Gauravs14241133"><span className='bannerIcon'><FaTwitter/></span></a>
       <a href="https://github.com/gaurav8158"><span className='bannerIcon'><BsGithub /></span></a> 
       <a href="https://www.linkedin.com/in/gauravsonis/"><span className='bannerIcon'><FaLinkedinIn/></span></a> 
      </div>
    </div>
   </div>
  )
}

export default Footer