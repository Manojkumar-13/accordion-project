import React,{useState} from 'react';

import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const SingleQuestion = ({question, answer}) => {
  const [showAnswer,SetShowAnswer] = useState(false);
  return (
    <article className='question'>
      <header><h4>{question}
      </h4><button className='btn' onClick={()=>SetShowAnswer(!showAnswer)}>{showAnswer?<AiOutlineMinus/>:<AiOutlinePlus/>}</button></header>
      {showAnswer && <p>{answer}</p>}
      
    </article>
  )
}

export default SingleQuestion