import React from 'react'

function Button({text,bg,onClick}) {
    
  return (
    <button onClick={onClick} style={{backgroundColor:bg,}} className='btn' >{text} </button>
  )
}

export default Button