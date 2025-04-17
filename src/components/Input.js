import {useState} from 'react'

function Input({taskSetter}){

    const[text, setText] = useState('');
    const [{title, details}, setTask] = useState({title:'',details:''});
    function handleSubmit(e) {

        if(text !== ''){
            e.preventDefault(); 

            taskSetter((prevList)=>{
                return [... prevList, text]
            });
            
        }
       

        setText("");

    }
    return (
    <form className='inputs'>
        <input
        type='text'
        placeholder='Enter Task Name'
        onChange={
            (e) => {
                setText(e.target.value);
            }
        }
        name='TaskName'
        value = {text}
        required/>
        
        {/* <input
        type='text'
        placeholder='Enter any notes'
        onChange={
            (e) => {
                setText(e.target.value);
            }
        }
        name='TaskName'
        value = {details}
        /> */}
        <button onClick={handleSubmit}>Add Task</button>
    </form>
    );
}

export default Input;