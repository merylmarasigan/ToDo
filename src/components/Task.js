import { useState } from "react";
// import EditIcon from "./EditIcon";

// const Task = (props) => {

//     // const[isDone, setIsDone] = useState(false);
//     const [isChecked, setIsChecked] = useState(false);
//     const taskName = props.task;
//     const deleter = props.deleteItem;

  
//     return (
//         <div className='task'>
            
//             <label className="task-name">
//                 <input 
//                 type="checkbox"
//                 name="task"
//                 value={taskName}
//                 checked={isChecked}
//                 onChange={(e)=>{
                    
//                     setIsChecked(e.target.checked)
//                     if(e.target.checked){
//                         deleter(props.id)
//                         // console.log('deleted')
//                     }
//                     }
//                     } 
//                     /> {taskName}
//             </label>
        
        
//         </div>
   
//     );
// }

// export default Task;

import EditIcon from "./EditIcon";
 
 const Task = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const taskName = props.task;
    const deleter = props.deleteItem;

    const handleCheck = (event) =>{
        setIsChecked(event.target.checked);
        setTimeout(() => {
            deleter(props.id);
        }, 150); 
    };
    return (
        <div className='task'>
            <label >
            <input
                type="checkbox"
                name="task"
                value={taskName}
                checked = {isChecked}
                onChange={handleCheck}
            /> 
                {taskName}
            </label>
        </div>

    );
 }
 
 export default Task;