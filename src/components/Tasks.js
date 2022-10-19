import Task from './Task'
function Tasks({tasks}) {
  
  return (
    <>
    {tasks.map((task)=>(
        <Task task={task} />
        // <h3 key={task.id}>{task.text}</h3>
    ))}
    </>
  )
}


export default Tasks
