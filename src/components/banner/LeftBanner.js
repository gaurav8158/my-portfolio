import React from 'react'
import { BsGithub } from "react-icons/bs";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import {FaCss3Alt,FaHtml5,FaTwitter,FaLinkedinIn,FaReact} from "react-icons/fa";
import {DiJavascript1 } from "react-icons/di"
const LeftBanner = () => {
    const [text] =useTypewriter({
        words: ['Front-end Developer',"Professional Coder", "UI Designer",],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
      });
  return (
    <div className='w-1/2 flex flex-col gap-20'> 
    <div className='flex flex-col gap-5'>
     <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4> 
    <h1 className='text-6xl font-bold text-white'>Hi, I'm
    <span className='text-designColor capitalize'> Gaurav soni</span>
    </h1>
    <h2 className='text-4xl font-bold text-white'>a
      <span> {text}</span> 
      <Cursor
    cursorBlinking="false"
    cursorStyle="|"
    cursorColor="#ff014f"
    />
    </h2>
    <p className='text-base font-bodyFont leading-6 tracking-wide'>
      I design and code beautifully simple things, and I love what I do</p>
    </div>
      <div className='flex justify-between'>
      <div>
      <h2 className='text-base uppercase font-titleFont mb-4'>
        FIND ME IN
      </h2>
      <div className='flex flex-wrap gap-4'>
        <a href="https://twitter.com/Gauravs14241133"><span className='bannerIcon'><FaTwitter/></span></a>
       <a href="https://github.com/gaurav8158"><span className='bannerIcon'><BsGithub /></span></a> 
       <a href="https://www.linkedin.com/in/gauravsonis/"><span className='bannerIcon'><FaLinkedinIn/></span></a> 
      </div>
      </div>
      <div>
      <h2 className='text-base uppercase font-titleFont mb-4'>
        BEST SKILL ON
      </h2>
      <div className='flex flex-wrap gap-4'>
        <span className='bannerIcon'><FaReact/></span>
        <span className='bannerIcon'><DiJavascript1/></span>
        <span className='bannerIcon'><FaHtml5/></span>
        <span className='bannerIcon'><FaCss3Alt/></span>
      </div>
      </div>
      </div>
      <div>
        <a href="https://drive.google.com/file/d/1zxIuz5fGW9SvC7Jz6XxdV_Rbx50AkeGz/view?usp=sharing">
        <button className="font-bold py-4 px-4 rounded inline-flex items-center bg-black bg-opacity-25 text-gray-200 rounded-md shadow-shadowOne hover:bg-opacity-40  transition-all hover:text-designColor cursor-pointer duration-300">
 <span>Resume</span>
</button>
        </a>
      </div>
  </div>
  )
}

export default LeftBanner