import React, { useEffect } from 'react';
import phoneheader from '../../assets/phone-header-bg.png'
import './Header.css'
import { BsMouse } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  return (
    <section id='header'>
      <div className='container header'>
        <div className='header-right' data-aos="fade-right">
          <h1>
            <span>پیشرو در سطح جهانی</span>
            <span>امنیت در همه پلتفرم ها</span>
            <span>سیستم پیام رسانی</span>
          </h1>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
          <div className='header-btn'>
            <a href=" " className="btn btn-dark" >بیاین شروع کنیم </a>
            <a href=" " className="btn btn-light">چجوری کار کنیم  </a>
          </div>
        </div>
        <div className='header-left' data-aos="fade-left">
          <img src={phoneheader} alt='phoneheader' />
        </div>
      </div>

      <div className='floating-icon'>
        <a href="#features">
          <BsMouse color={"#fff"} className='mouse' />
        </a>
      </div>
    </section>
  )


}

export default Header;
