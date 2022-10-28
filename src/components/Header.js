import React from 'react'

import Button from './Button'
const Header = ({title, onAdd, showAddTask}) => {
    
  return (
    <header className='header'><h1 style={headingStle}>Task tracker {title}</h1>
    <Button text={showAddTask ?"Close":"Add"} bg={showAddTask ?"Red":"Green"} onClick={onAdd}/>
    </header>
    
    )
}
const headingStle={color:"red",backgroundColor:"black",}
Header.defaultProps = {
    title : 'Task Tracker',
}

export default Header