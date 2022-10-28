import './index.css';
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([
    
])


useEffect (()=>{
  const getData = async()=>{
    const fetchedTask=await fetchData()
    setTasks(fetchedTask)
  }
  getData()
},[])

const fetchData = async ()=>{
  const res= await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}

const fetchTasksingular = async (id)=>{
  const res= await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}
const addTask =async (task) =>{

  const res = await fetch(`http://localhost:5000/tasks`,{
    method:"POST",
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(task),
  })

  const data= await res.json()
  setTasks([...tasks, data])

  // const id =Math.floor(Math.random()*10000)+1
  // const newTask ={id, ...task}
  // setTasks([...tasks,newTask])
}

const deleteTask = async(id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE'
  })
  setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder =async (id)=>{

  const taskToToggle= await fetchTasksingular(id)
  const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}

  const res= await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(updTask)
  })
  const data= await res.json()


  setTasks(tasks.map((task)=>task.id===id?{ ...task, reminder:data.reminder}:task))
  // tasks.map((task)=>task.id===id?console.log(task.reminder))
  // for (let i = 0; i < tasks.length; i++) {
  //   if(tasks[i].id===id)console.log(tasks[i].reminder)
  // }
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
