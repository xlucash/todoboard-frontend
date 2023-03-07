import './App.css';

export default function Task({myTask, handleTaskClick}) {
    const currentDate = new Date();
    const taskDate = new Date(myTask.doneByDate);
    const color = taskDate.getTime() <= currentDate.getTime() ? 'red' : 'green';

    return (
        <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
                <div class="card card-just-text" data-background="color" data-color={color} data-radius="none">
                    <div class="content">
                        <h5 class="title">{myTask.title}</h5>
                        <p class="description">{myTask.description}</p>
                        <p class="description">Until: {myTask.doneByDate}</p>
                    </div>
                  </div>
            </div>
          </div>
        
    )

}

