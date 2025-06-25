import StartMenu from './StartMenu'
import Clock from './Clock'
import Task from './Task'

function Taskbar({windows, updateWindows}){
    
    return(
      <div className="bg-gray-300 h-10 flex items-center justify-between px-2 taskbar relative">
        <div className="flex justify-start">
          <StartMenu windows={windows} updateWindows={updateWindows} />
          {windows.map((wind, index) => <Task key={`${wind.name}-${index}`} name={wind.name} windows={windows} updateWindows={updateWindows} />)}
        </div>
        <div>
          <Clock/>
        </div>
      </div>
    )
}

export default Taskbar