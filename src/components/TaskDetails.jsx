import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackToListClick = () => {
        navigate("/");
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackToListClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil, omnis vero eos voluptatum mollitia!</p>
            </div>
        </>
     );
}
 
export default TaskDetails;