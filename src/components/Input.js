import {useState} from 'react'

function Input(props){

    const[text, setText] = useState('');
    const [{title, details}, setTask] = useState({title:'',details:''});
    function handleSubmit(e) {

        if(text !== ''){
            e.preventDefault(); 

           props.onAdd(text)
            
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
        
        <button onClick={handleSubmit}>Add Task</button>
    </form>
    );
}

export default Input;