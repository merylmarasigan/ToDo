import {useState} from 'react'

function Input({taskSetter}){

    const[text, setText] = useState('');
    function handleSubmit(e) {
        e.preventDefault(); 

        taskSetter((prevList)=>{
            return [... prevList, text]
        });

        setText("");

    }
    return (
    <form>
        <input
        type='text'
        placeholder='Enter Task'
        onChange={
            (e) => {
                setText(e.target.value);
            }
        }
        value = {text}/>
        <button onClick={handleSubmit}>Add Task</button>
    </form>
    );
}

export default Input;