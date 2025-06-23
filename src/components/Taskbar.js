import StartMenu from './StartMenu'
import Clock from './Clock'

function Taskbar(){
    

    return(
      <div className="bg-gray-300 h-10 flex items-center justify-between px-2 taskbar relative">
        <StartMenu/>
        <Clock/>
      </div>
    )
}

export default Taskbar