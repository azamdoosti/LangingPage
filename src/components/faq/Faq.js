import React, { useState } from 'react';
import {questions} from './data'
import './Faq.css'
import Question from '../Question';

function Faq() {
  return (
  <section id='faq'>
   <div className='container faq'>
     <div className= 'faq-title'>
       <MdOutlineLibraryboks color="orangeRed" size={30}/>
      <h2>سوالات متداول  </h2>
      <p> لورم ایپسوم متن ساختگی</p>
     </div>
     <div className='questions'>
     {
       questions && questions.map((question) =>
        <Question
        key={question.id}
        title={question.title}
        answer ={question.answer}
        />
       )
     }
       </div>
   </div>
  </section>
  )
}

export default Faq;
