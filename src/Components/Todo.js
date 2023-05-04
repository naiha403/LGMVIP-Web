import React from 'react';
import {BsTrash} from 'react-icons/bs';
import {TiTickOutline} from 'react-icons/ti';

export default function Todo({todos, completeTask, removeTask}) {

  return (
    todos.map((todo, index) => ( 
        <div className={todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
            <div className='todo-text'>{todo.text}</div>
            <div className='icons' key={todo.id}>
                <TiTickOutline className={todo.isComplete ? 'hide' : 'tick'} onClick={() => {completeTask(todo.id)}}></TiTickOutline>
                <BsTrash className='trash' onClick={() => {removeTask(todo.id)}}></BsTrash>
            </div>
        </div>
        ))
  )
}