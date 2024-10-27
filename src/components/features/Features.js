import React from 'react';
import './Features.css'
import phoneFeatures from '../../assets/phone-features.png'
import {BsFillBookmarkStarFill, BsHexagon} from "react-icons/bs"
import {featuresList} from './data.js'

const Features = () => {
  return(
     <section id='features'>
      <div className='container feature '>
      <div className='title'>
        <BsFillBookmarkStarFill color="orangered" size={30}/>
          <h2>ویژگی های اصلی</h2>
           <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
        </div> 
      <div className='features-content'>
        <div className='features-right'>
          <img src={phoneFeatures} alt=''/>
        </div>
        <div className='features-left'>
           {
            featuresList.map(feature =>(
              <div className='feature' key={feature.id}>
              <div className='feature-icon'>
                <BsHexagon color='#fc5412' size={55}/>
                <div className='inner-icon'>{feature.icon}</div>
              </div>
              <div className='feature-text'>
                <h2>{feature.heading}</h2>
                <p>{feature.text}</p>
              </div>
            </div>
            ))
           }
        </div>

      </div>
      </div>    

    </section>
  )
};

export default Features;
