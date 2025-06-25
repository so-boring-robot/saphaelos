import '../styles/Task.css'
function Task({name, windows, updateWindows}){
    function handleWindow(name){
        const current = windows.find((wind) => wind.name === name)
        const windowsFiltered = windows.filter((wind) => wind.name!==name)
        if(current.visibility){
            updateWindows([...windowsFiltered, {'name':name, 'visibility':false}])
        }
        else{
            updateWindows([...windowsFiltered, {'name':name, 'visibility':true}])
        }
    }
    return <div className="flex mx-1 px-2 bg-gray-200 px-3 py-1 task-color truncate" onClick={() => handleWindow(name)}>{name}</div>
}

export default Task
