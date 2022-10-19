import React from 'react'

import Button from './Button'
const Header = (props) => {
    const onClick=()=>{
        console.log('onClick');
    }
  return (
    <header className='header'><h1 style={headingStle}>Task tracker {props.title}</h1>
    <Button text="Add" bg="green" onClick={onClick}/>
    </header>
    
    )
}
const headingStle={color:"red",backgroundColor:"black",}
Header.defaultProps = {
    title : 'Task Tracker',
}

export default Header