import React from 'react'

function Button({text,bg}) {
  return (
    <button style={{backgroundColor:bg,}} className='btn' >{text} </button>
  )
}

export default Button