import React from 'react';
import {MdOutlineLibraryboks} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import {questions} from './data'

function Faq() {
  return (
  <section id='faq'>
   <div className='container faq'>
     <div className='faq-title'>
       <MdOutlineLibraryboks color="orangred" size={30}/>
      <h2>سوالات متداول  </h2>
      <p> لورم ایپسوم متن ساختگی</p>
     </div>
     <div className='questions'>
     {
       questions && questions.map((question) =>
        <div className='question' key={id}>
        <div className='question-title'>
         <h4>{question.title}</h4>
         <button>
           <AiOutlinePlus/>
         </button>
      </div>
      <div className='question-answer'>
      <p>{question.answer}</p>
     </div>
     </div>
       )
     }
     
       </div>
   </div>
  </section>
  )
}

export default Faq;
