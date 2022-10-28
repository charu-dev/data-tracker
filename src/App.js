import './index.css';
import { useState } from 'react';
import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([
    
])

const addTask = (task) =>{
  const id =Math.floor(Math.random()*10000)+1
  const newTask ={id, ...task}
  setTasks([...tasks,newTask])
}

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>task.id===id?{ ...task, reminder:!task.reminder}:task))
  // tasks.map((task)=>task.id===id?console.log(task.reminder))
  for (let i = 0; i < tasks.length; i++) {
    if(tasks[i].id===id)console.log(tasks[i].reminder)
  }
;}

  return (


    <div className="container">
      {/* <h1>Hello friend! Charu Here</h1> */}
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />:('No tasks to show')}
    </div>
  );
}

export default App;
