import React, { useState, useEffect } from 'react';
import { questions } from './data'
import './Faq.css'
import Question from '../Question';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faq() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])


  return (
    <section id='faq'>
      <div className='container faq'>
        <div className='faq-title' data-aos="fade-up">
          <MdOutlineLibraryboks color="orangeRed" size={30} />
          <h2>سوالات متداول  </h2>
          <p> لورم ایپسوم متن ساختگی</p>
        </div>
        <div className='questions'>
          {
            questions && questions.map((question) =>
              <Question
                key={question.id}
                title={question.title}
                answer={question.answer}
              />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Faq;
