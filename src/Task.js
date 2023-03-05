import './App.css';

export default function Task({myTask, handleTaskClick}) {
    return (
        <div class="col-md-4 col-sm-6 content-card">
            <div class="card-big-shadow">
                <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                    <div class="content">
                        <h4 class="title">{myTask.title}</h4>
                        <p class="description">{myTask.description}</p>
                    </div>
                  </div>
            </div>
          </div>
        
    )

}

