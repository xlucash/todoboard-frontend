import logo from './logo.svg';
import './App.css';
import Task from './Task';
import ListTask from './ListTask';

function App() {
  const taskList = [{
    id: 1,
    title: 'Task 1',
    description: 'This is test task 1',
    date: new Date().toLocaleString()
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is test task 2',
    date: new Date().toLocaleString()
  }];


  return (
    <div id="content">
      <div id="whiteboard">
        <div id="text">
          <h2>My Task List</h2>
        </div>
        <div class="row">
          <ListTask myTaskList={taskList} />
        </div>
        <div id="eraser"></div>
        <div id="red-pen"></div>
        <div id="blue-pen"></div>
      </div>
    </div>
  );
}

export default App;
