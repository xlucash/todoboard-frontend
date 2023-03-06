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
    date: new Date().toLocaleDateString()
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This is test task 3',
    date: new Date().toLocaleDateString()
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'This is test task 4',
    date: new Date().toLocaleDateString()
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'This is test task 5',
    date: new Date().toLocaleDateString()
  },
  {
    id: 6,
    title: 'Task 6',
    description: 'This is test task 6',
    date: new Date().toLocaleDateString()
  },
  {
    id: 7,
    title: 'Task 7',
    description: 'This is test task 7',
    date: new Date().toLocaleDateString()
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
