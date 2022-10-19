import React, { useState } from 'react'

function Tasks() {
    const [tasks,setTasks]=useState([
        {id: 1,
    text: 'Doctors Appointement',
day:"tuesday",reminder:"true"},
{id: 1,
    text: 'Doctors Appointement',
day:"tuesday",reminder:"true"},
{id: 1,
    text: 'Doctors Appointement',
day:"tuesday",reminder:"true"},
{id: 1,
    text: 'Doctors Appointement',
day:"tuesday",reminder:"true"},
])
  return (
    <>
    {tasks.map((task)=>(
        <h3 key={task.id}>{task.text}</h3>
    ))}
    </>
  )
}


export default Tasks
