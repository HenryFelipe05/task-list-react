import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = ({ handleTaksAddiction }) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        if(inputData == "" || inputData == null){
            alert("Adicione um título para a tarefa.");
        }
        else {
            handleTaksAddiction(inputData);
            setInputData("");
        }
    }

    return ( 
        <>
            <div className='add-task-container'>
                <input onChange={handleInputChange} value={inputData} type="text" className='add-task-input'/>
                <div className="add-button-container">
                    <Button onClick={handleAddTaskClick}>Adicionar</Button>
                </div>
            </div>
        </>
    );
};
 
export default AddTask;