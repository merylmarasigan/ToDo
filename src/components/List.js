import Task from "./Task";
const List  = (props) => {
    const taskList = props.tasks
    return(
    <form className='list'>
      {taskList.map((t) => {
        return <Task task={t}/>
      })}
        
    </form>
      );
}

export default List;