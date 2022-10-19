import './index.css';
import { useState } from 'react';
import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'
function App() {

  const [tasks,setTasks]=useState([
    {id: 1,
text: 'Doctors Appointement',
day:"tuesday",reminder:"true"},
{id: 2,
text: 'Teachers Appointement',
day:"tuesday",reminder:"true"},
{id: 3,
text: 'Business Appointement',
day:"tuesday",reminder:"true"},
{id: 4,
text: 'Friends Appointement',
day:"tuesday",reminder:"true"},
])

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
      <Header />
      <AddTask />
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />:('No tasks to show')}
    </div>
  );
}

export default App;
