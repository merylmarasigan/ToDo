import { useState } from "react";
import EditIcon from "./EditIcon";

const Task = (props) => {

    // const[isDone, setIsDone] = useState(false);

    
    const taskName = props.task;
    const deleter = props.deleteItem;
    return (
        <div className='task' onClick={() => {deleter(props.id)}}>
             {/* <label>
                <input  type="checkbox" name="task" value={taskName} onChange={()=>{
                    deleter(props.id)
                    }
                    } /> {taskName}
             </label>
            <EditIcon className='edit-icon'></EditIcon> */}
            <div className='task-name'>
                <h3>{taskName}</h3>
                {/* <h5>Notes:</h5> */}
            </div>
            
        </div>
   
    );
}

export default Task;