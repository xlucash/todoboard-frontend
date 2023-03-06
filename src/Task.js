import './App.css';

export default function Task({myTask, handleTaskClick}) {
    const currentDate = new Date().toLocaleString();
    const currentDateFromString = new Date(currentDate).getTime();
    const taskDate = new Date(myTask.date).getTime();
    const color = taskDate <= currentDateFromString ? 'red' : 'green';

    return (
        <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
                <div class="card card-just-text" data-background="color" data-color={color} data-radius="none">
                    <div class="content">
                        <h4 class="title">{myTask.title}</h4>
                        <p class="description">{myTask.description}</p>
                        <p class="description">Until: {myTask.date}</p>
                        <p class="description">{currentDateFromString}</p>
                        <p class="description">{taskDate}</p>
                    </div>
                  </div>
            </div>
          </div>
        
    )

}

