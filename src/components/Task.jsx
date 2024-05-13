import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';

import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
    const navigate = useNavigate();

    const handleTaskDetailClick = () => {
        navigate(`/${task.title}`);
    }
    return ( 
        <>
            <div className='task-container' style={task.completed ? { borderLeft: "6px solid rgb(0, 65, 165)", textDecoration: "line-through"} : {} }>
                <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </div>
                <div className="buttons-container">
                    <button className='see-task-details' onClick={handleTaskDetailClick}><CgInfo/></button>
                    <button className='remove-task-button' onClick={() => handleTaskDelete(task.id)}><CgClose/></button>
                </div>
            </div>
        </>
     );
}
 
export default Task;