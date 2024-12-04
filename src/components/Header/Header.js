import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { addClassOnScroll } from '../../custom'; // Ensure this is correctly exported and imported
import Style from './Header.module.css';

export default function Header() {
  useEffect(() => {
    const handleScroll = addClassOnScroll('header', `${Style.scrolled}`);
    return () => {
      // Cleanup: Remove the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={Style.header}>
      <div className={Style.overlay}></div>
      <Navbar />
    </header>
  );
}
