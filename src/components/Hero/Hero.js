import React from 'react'
import Style from './Hero.module.css';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import RightImg from '../../assets/rightimg.webp';
import Logo1 from '../../assets/logo1.svg';
import Logo2 from '../../assets/logo2.svg';
import Logo3 from '../../assets/logo3.svg';
import Logo4 from '../../assets/logo4.png';
import Logo5 from '../../assets/logo5.svg';
import Logo6 from '../../assets/logo6.svg';

import FlipButton from '../Common/Flipbutton/FlipButton';
export default function Hero() {
  return (
    <>
    <section className={Style.hero}>
      <div className="container mx-auto">
        <div className={Style.row}>
            <div className={Style.leftCol}>
                <div className={Style.leftColwrap}>
                    <h1>Lorem ipsum sit amet</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.</p>
                    <FlipButton text="Get Started" icon={faArrowRight} className='icon-right mt-5' />
                </div>
            </div>
            <div className={Style.rightCol}>
                <img src={RightImg} className={Style.rightImg} alt="right img"/>
            </div>
        </div>
      </div>
    </section>
    <section className={Style.logoSection} >
      <div className={Style.logoWrapper}>
        {/* item 1 */}
        <div className={Style.logoItem}>
          <img src={Logo1} alt="logo-img"/>
        </div>
        {/* item 2 */}
        <div className={Style.logoItem}>
          <img src={Logo2} alt="logo-img"/>
        </div>
        {/* item 4 */}
        <div className={Style.logoItem}>
          <img src={Logo4} alt="logo-img"/>
        </div>
        {/* item 5 */}
        <div className={Style.logoItem}>
          <img src={Logo5} alt="logo-img"/>
        </div>
        {/* item 6 */}
        <div className={Style.logoItem}>
          <img src={Logo6} alt="logo-img"/>
        </div>
        {/* item 7 */}
        <div className={Style.logoItem}>
          <img src={Logo3} alt="logo-img"/>
        </div>
      </div>
    </section>
    </>
  )
}
