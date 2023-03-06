import { useState } from "react";
import Task from "./Task";
import './App.css'

export default function ListTask({myTaskList}) {
    const [ detailId, updateDetailId ] = useState('');
    
    function handleTaskClick(id) {
        console.log('Task id ' + id);
        updateDetailId(id);
    }

    const listTaskHtml = myTaskList.map(task => 
        <div className="col" key={task.id}>
            <Task myTask={task} handleTaskClick={handleTaskClick} />
        </div>
        
    );

    function getDetailTaskHtml() {
        // Get the task object from the detailId
        const detailTask = myTaskList.find(task => task.id === detailId);

        // Return the object rendering
        if (detailTask) {
            return (
                <div>
                    <h4>Detail Task</h4>
                    <div>Name: {detailTask.title}</div>
                    <div>Description: {detailTask.description}</div>
                    <div>Date: {detailTask.date}</div>
                </div>
            )
        } else {
            return <></>
        }
    }

    return (
        <div>
            {listTaskHtml}
            {getDetailTaskHtml()}
        </div>
    )
}