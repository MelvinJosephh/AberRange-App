import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import copied_hero from '../Assets/copied_hero.png'
const Hero = () => {

  const navigate = useNavigate();

    const handleButtonClick = () => {

       navigate('/new-collections');
    };

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
        <button onClick={handleButtonClick}>
            Latest Collections
            <img src={arrow_icon} alt=""/>
          </button>
      </div>
      </div>

      <div className='hero-right'>
        <img src={copied_hero} alt=""/>
      </div>
    </div>
  )
}

export default Hero
