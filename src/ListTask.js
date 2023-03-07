import axios from 'axios'
import { useEffect, useState } from "react";
import Task from "./Task";
import './App.css'

export default function ListTask() {
    const [ detailId, updateDetailId ] = useState('');
    const [ myTaskList, updateMyTaskList ] = useState([]);

    useEffect(() => {
        console.log("Retrieve the tasks");
        axios
            .get("http://localhost:8080/api/tasks")
            .then(response => {
                updateMyTaskList(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }, []);
    
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
                    <div>Date: {detailTask.doneByDate}</div>
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