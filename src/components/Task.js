import '../styles/Task.css'
function Task({setTaskVisible, setVisible}){
    return <div className="flex flex-1 mx-1 px-2 bg-gray-200 px-3 py-1 task-color truncate" onClick={() => setVisible(true)}>Generic application</div>
}

export default Task
