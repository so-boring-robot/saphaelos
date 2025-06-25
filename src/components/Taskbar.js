import StartMenu from './StartMenu'
import Clock from './Clock'
import Task from './Task'

function Taskbar({setVisible, taskIsVisible, setTaskIsVisible}){
    
    return(
      <div className="bg-gray-300 h-10 flex items-center justify-between px-2 taskbar relative">
        <div className="flex justify-start">
          <StartMenu setVisible={setVisible} setTaskIsVisible={setTaskIsVisible} />
          { taskIsVisible && <Task setVisible={setVisible}/>}
        </div>
        <div>
          <Clock/>
        </div>
      </div>
    )
}

export default Taskbar