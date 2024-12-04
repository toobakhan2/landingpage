import React from 'react'
import Style from './Hero.module.css';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import RightImg from '../../assets/rightimg.webp'
import FlipButton from '../Common/Flipbutton/FlipButton';
export default function Hero() {
  return (
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
                <img src={RightImg} className={Style.rightImg} />
            </div>
        </div>
      </div>
      <svg className={Style.customSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#f3f4f6" d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,165.3C672,160,768,160,864,170.7C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
    </section>
  )
}
