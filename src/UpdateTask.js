import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTask() {
    const [ myTaskById, updateMyTaskById ] = useState([]);
    let navigate = useNavigate(); 
    let { id } = useParams();

    const titleElement = useRef(null);
    const descriptionElement = useRef(null);
    const dateElement = useRef(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/tasks/"+id)
            .then(response => {
                updateMyTaskById(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }, []);


    function handleUpdateClick(id, e) {
        e.preventDefault();
        const data = {
            title: titleElement.current.value,
            description: descriptionElement.current.value,
            doneByDate: dateElement.current.value
        };
        axios
            .put("http://localhost:8080/api/tasks/"+id, data)
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
                <h4>Update task id: {id}</h4>
                <label htmlFor='title'>Title</label><br/>
                <input type='text' name='title' ref={titleElement} defaultValue={myTaskById.title}/><br/>
                <label htmlFor='description'>Description</label><br/>
                <input type='text' name='description' ref={descriptionElement} defaultValue={myTaskById.description}></input><br/>
                <label htmlFor='doneByDate'>Deadline date</label><br/>
                <input type='date' name='doneByDate' ref={dateElement} defaultValue={myTaskById.doneByDate}></input><br/>
                <br/>
                <button
                    class="form-btn sx" 
                    onClick={(e) => handleUpdateClick(myTaskById.id, e)} 
                    >Update</button>
                <button 
                    class="form-btn dx"
                    onClick={homePage}
                    >Return</button>
            </form>
        </div>
    )
}