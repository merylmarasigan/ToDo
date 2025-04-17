import Task from "./Task";
const List  = (props) => {
    const taskList = props.tasks;
    const taskSetter = props.taskSetter;

    function deleteTask(id){
     
      taskSetter((prevItems) => {
        return prevItems.filter((task, idx) =>{
          return idx !== id;
        })
      })
    }
    return(
    <form className='list'>
      {taskList.map((t, idx) => {
        return <Task key={idx} id={idx} task={t} deleteItem={deleteTask}/>
      })}
        
    </form>
      );
}

export default List;