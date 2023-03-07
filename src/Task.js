import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

export default function Task({myTask, handleTaskClick}) {
    const currentDate = new Date();
    const taskDate = new Date(myTask.doneByDate);
    const color = taskDate.getTime() <= currentDate.getTime() ? 'red' : 'green';

    function getButtonHtml(id) {
        return (
          <Link to={"/update-task/"+id}>
          <button class="buttonedit"><i class="fas fa-pen"></i></button>
          </Link>
        )
    }

    function deleteTask(id, e) {
        e.preventDefault();
        axios
            .delete("http://localhost:8080/api/tasks/"+id)
            .then(response => {
                console.log("Deleted task")
                console.log(response.data);
            })
            .catch(e => {
                console.log(e)
            });
        window.location.reload(false);
    }

    return (
        <div class="col-md-4 col-sm-6 content-card">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
            <div class="card-big-shadow">
                <div class="card card-just-text" data-background="color" data-color={color} data-radius="none">
                    <div class="content">
                        <h5 class="title">{myTask.title}</h5>
                        <button class="buttondelete" onClick={(e) => deleteTask(myTask.id, e)}><i class="fas fa-trash"></i></button> {getButtonHtml(myTask.id)}
                        <p class="description">{myTask.description}</p>
                        <p class="description">Until: {myTask.doneByDate}</p>
                    </div>
                  </div>
            </div>
          </div>
        
    )

}

