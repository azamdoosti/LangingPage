import React from 'react';
import './Subscribe.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])


  return (
    <section id='subscribe'>
      <div className='container subscribe' data-aos="fade-up">
        <h2>حالا مشترک شوید</h2>
        <form>
          <button>مشترک شوید</button>
          <input type='text' placeholder='ایمیل خود را وارد کنید...'></input>
        </form>
        <div className='socials'>
          <div className='social-icon'>
            <FaInstagram />
          </div>
          <div className='social-icon'>
            <FaTwitter />
          </div>
          <div className='social-icon'>
            <FaFacebook />
          </div>
          <div className='social-icon'>
            <TiSocialGooglePlus />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Subscribe;
