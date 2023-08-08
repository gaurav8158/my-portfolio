import React, { useEffect, useState } from 'react'
import { logo } from '../../assets'
import { navLinksdata } from '../../constants'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className='w-full  h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
            <div className='rounded-full bg-slate-950 color-red h-16 w-16 bg-black-500 overflow-hidden'>
                <img className='object-cover h-16 w-16' src={logo} alt="logo" />
            </div>
            <div>
{screenWidth<600 ? <h1>MY PORTFOLIO</h1> : (
 <ul className='flex flex-wrap item-center gap-10'>
 {navLinksdata.map(({ _id, title, link }) => {
     return <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
     <Link
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
     >{title}</Link>    
     </li>
 })}
</ul>
)  }
               
            </div>
        </div>
    )
}

export default Navbar