import React from 'react';
import {faPhoneVolume}  from '@fortawesome/free-solid-svg-icons'
import Style from './Navbar.module.css'
import Flipbtn from '../Common/Flipbutton/FlipButton';
import Logo from '../../assets/logo.png';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function navbar() {
  return (
      <div className='container mx-auto py-3'>
        <div className='flex items-center flex-wrap justify-between'>
           <div className='w-1/4 header-logo'>
             <a href="#"><img src={Logo} alt="Logo" className='w-24 max-w-full '/></a>
           </div>
           <nav className='w-3/4'>
            <ul className=' items-center flex justify-end space-x-8'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-lg text-gray-700 hover:text-blue-500">
                    {item.name}
                  </a>
                </li>
               ))}
               <li>
                <Flipbtn icon={faPhoneVolume} text="Contact us" isLink={false} className={Style['header-btn']} />
               </li>
            </ul>
           </nav>
        </div>
      </div>
  )
}
