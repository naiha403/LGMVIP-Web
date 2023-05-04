import React, { useState } from 'react';

export default function TodoForm(props) {
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
        id:Math.floor(Math.random() * 1000000),
        text:input,
        isComplete:false
    })
    setInput('');
}
    
  return (
    
    <div> 
      <h1 className='h1'>My ToDo List</h1>
        <form className='todo-form'>
            <input
            type='text'
            onChange={handleChange}
            placeholder='Enter Todo Here...'
            className='todo-input'
            value={input}
            name='text' 
            />
            <button 
              type='submit' 
              onClick={handleSubmit} 
              className='todo-btn'>Add ToDo
            </button>
            <button className='remove-all-btn' >Remove All</button>
              
        </form>
    </div>
    
  )
}
