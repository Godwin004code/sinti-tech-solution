import React from 'react'
import logo from "../../public/sinti-logo-zip-file/png/logo-no-background.png"
import Link from 'next/link'
import { FaBars } from "react-icons/fa"


const Header = () => {
  return (
    <header className='flex justify-between w-[90%] mx-auto mt-8'>
        <div className='my-auto'><img src={logo.src} className='w-[200px] h-[40px]' alt="Logo" /></div>
        <nav className='align-middle w-2/5 my-auto md:hidden'>
            <ul className='flex align-middle justify-between  '>
                <li className='text-lg'>
                    <Link className='text-white' href={"/"}>Home</Link>
                </li>
                <li className='text-lg'>
                    <Link className='text-white' href={"/"}>Services</Link>
                </li>
                <li className='text-lg'>
                    <Link className='text-white' href={"/"}>Our Project</Link>
                </li>
                <li className='text-lg'>
                    <Link className='text-white' href={"/"}>About us</Link>
                </li>
            </ul>
        </nav>
        
        <div className='my-auto md:hidden'>
            <button className='text-base border-2 px-6 py-4 text-white'>Contact us</button>
        </div>

       <div className='hidden sm:block'>
       <input type="checkbox" id="navi-toggle" className="checkbox" />
  <label for="navi-toggle" className="button">
    <div className="icon">
    <FaBars />
    </div>
  </label>
  <div className="background">&nbsp;</div>

  
  <nav className="nav">
    <ul className="list">
      <li className="item"> <a className="link"> Link 1 </a> </li>
      <li className="item"> <a className="link"> Link 2 </a> </li>
      <li className="item"> <a className="link"> Link 4 </a> </li>
      <li className="item"> <a className="link"> Link 5 </a> </li>
      <li className="item"> <a className="link"> Link 6 </a> </li>
    </ul>
  </nav>
       </div>
    </header>
  )
}

export default Header