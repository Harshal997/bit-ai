import React from 'react'
import './prompt.css'

const Prompt = ({prompt}) => {
  return (
    <div className='prompt-container'>
        <h3>{prompt}</h3>
        <p>Get immediate AI generated response</p>
    </div>
  )
}

export default Prompt