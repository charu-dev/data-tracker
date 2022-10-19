import Task from './Task'
function Tasks({tasks, onDelete}) {
  
  return (
    <>
    {tasks.map((task)=>(
        <Task key={task.id} task={task} onDelete={onDelete} onClick={onDelete} />
        // <h3 key={task.id}>{task.text}</h3>
    ))}
    </>
  )
}


export default Tasks
