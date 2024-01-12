import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import copied_hero from '../Assets/copied_hero.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Unleash Your Wardrobe's Potential with Our Latest Trends</h2>
        <div className='hero-hand-icon'>
            <h3>by AberRange Collections</h3>
            {/* <img src={hand_icon} alt="" /> */}
        </div>
        <p>Explore the latest trends handpicked to suit your lifestyle – 
          because you deserve nothing but the best in fashion.</p>

        <div className="hero-latest-btn">
        <div>Latest Collections </div>
        <img src={arrow_icon} alt=""/>
      </div>
      </div>

      <div className='hero-right'>
        <img src={copied_hero} alt=""/>
      </div>
    </div>
  )
}

export default Hero
