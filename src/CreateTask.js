import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

export default function CreateTask() {
    const titleElement = useRef(null);
    const descriptionElement = useRef(null);
    const dateElement = useRef(null);

    let navigate = useNavigate(); 

    function handleCreateClick(e) {
        e.preventDefault();
        console.log("Submit data to the server");
        const data = {
            title: titleElement.current.value,
            description: descriptionElement.current.value,
            doneByDate: dateElement.current.value
        };
        axios
            .post("http://localhost:8080/api/tasks", data)
            .then(response => {
                console.log("Success!");
                console.log(response.data);
                navigate('/board-tasks', {replace: true}); 
            })
            .catch(e => {
                console.log(e);
            });
        
    }

    function homePage() {
        navigate('/board-tasks', {replace: true}); 
    }



    return (
        <div>
            <form>
                <h4>Create a new task</h4>
                <label htmlFor='title'>Title</label><br/>
                <input type='text' name='title' ref={titleElement}></input><br/>
                <label htmlFor='description'>Description</label><br/>
                <input type='text' name='description' ref={descriptionElement}></input><br/>
                <label htmlFor='doneByDate'>Deadline date</label><br/>
                <input type='date' name='doneByDate' ref={dateElement}></input><br/>
                <br/>
                <button 
                    class="form-btn sx" 
                    onClick={handleCreateClick} 
                    >Create</button>
                <button 
                    class="form-btn dx"
                    onClick={homePage}
                    >Return</button>
            </form>
        </div>
    )
}