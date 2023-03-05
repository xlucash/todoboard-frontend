export default function Task({myTask, handleTaskClick}) {
    return (
        <div>
            <div>{myTask.title} <button onClick={e => handleTaskClick(myTask.id)}>Details</button></div>        
        </div>
    )
}