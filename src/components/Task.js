import '../styles/Task.css'
function Task({name, windows, updateWindows}){
    function handleWindow(name) {
        const updated = windows.map((wind) =>
            wind.name === name ? { ...wind, visibility: !wind.visibility } : wind
        );
        updateWindows(updated);
    }
    return <div className="flex mx-1 px-2 bg-gray-200 px-3 py-1 task-color truncate" onClick={() => handleWindow(name)}>{name}</div>
}

export default Task
