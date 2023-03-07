import logo from './logo.svg';
import './App.css';
import Task from './Task';
import ListTask from './ListTask';
import CreateTask from './CreateTask';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import UpdateTask from './UpdateTask';

function App() {
  function getButtonHtml() {
    return (
      <Link to={"/create-task"}>
      <button class="button"><i class="fas fa-plus"></i></button>
      </Link>
    )
  }

  return (
    <BrowserRouter>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
    <div id="content">
      <div id="whiteboard">
        <div id="text">
          <h2>My Task Board</h2>
        </div>
        <div class="row">
          <Routes>
            <Route path="/" element={<ListTask />} />
            <Route path="/board-tasks" element={<ListTask />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/update-task/:id" element={<UpdateTask />} />
          </Routes>
        </div>
        <div id="eraser"></div>
        <div id="red-pen"></div>
        <div id="blue-pen"></div>
        {getButtonHtml()}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
