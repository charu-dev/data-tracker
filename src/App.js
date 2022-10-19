import './index.css';
import { useState } from 'react';
import Tasks from './components/Tasks'
import Header from './components/Header'
function App() {

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


    <div className="container">
      {/* <h1>Hello friend! Charu Here</h1> */}
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
