import React from 'react'

function Task({task}) {
  return (
    <div><h3 key={task.id}>{task.text}</h3></div>
  )
}

export default Task