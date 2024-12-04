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
      <div className='container mx-auto py-3 z-10 relative'>
        <div className={`${Style['row']} `}>
           <div  className={`${Style['header-logo']} `}>
             <a href="#"><img src={Logo} alt="Logo" className='w-24 max-w-full '/></a>
           </div>
           <nav className='w-3/4'>
            <ul className={Style.menuList}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} >
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
