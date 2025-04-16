import EditIcon from "./EditIcon";

const Task = (props) => {
    const taskName = props.task;
    return (
        <div className='task'>
             <label >
                <input  type="checkbox" name="task" value={taskName}/> {taskName}
             </label>
            <EditIcon className='edit-icon'></EditIcon>
        </div>
   
    );
}

export default Task;