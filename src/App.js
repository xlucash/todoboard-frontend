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
    <div>
      <h2>My Task List</h2>
      <ListTask myTaskList={taskList} />
    </div>
  );
}

export default App;
