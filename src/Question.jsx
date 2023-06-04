import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
export default function Question({ title, info, handleClick, questionId, id }) {
  const isActive = questionId === id
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button onClick={() => handleClick(id)} className='question-btn'>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}
