import './index.css';
import { useState } from 'react';
import Tasks from './components/Tasks'
import Header from './components/Header'
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

  return (


    <div className="container">
      {/* <h1>Hello friend! Charu Here</h1> */}
      <Header />
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} />:('No tasks to show')}
    </div>
  );
}

export default App;
