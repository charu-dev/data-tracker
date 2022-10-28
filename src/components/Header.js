import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'
const Header = ({title, onAdd, showAddTask}) => {
    const location =useLocation()
  return (
    <header className='header'><h1 style={headingStle}>Task tracker {title}</h1>
    
    {location.pathname==='/'&&( <Button text={showAddTask ?"Close":"Add"} bg={showAddTask ?"Red":"Green"} onClick={onAdd}/>
   )}
    </header>
    
    )
}
const headingStle={color:"red",backgroundColor:"black",}
Header.defaultProps = {
    title : 'Task Tracker',
}

export default Header