import icon from '../assets/windows-95-computer.png'

function Desktop(){
    return(
    <div className="flex-1 relative p-4">
        <div className="absolute top-4 left-4 text-white text-sm">
        <div className="flex flex-col items-center cursor-pointer">
            <img
            src={icon}
            className="w-10 h-10 mb-1"
            alt="Poste de travail"
            />
            <span className="bg-black bg-opacity-40 px-1">Poste de travail</span>
        </div>
        </div>
    </div>
    )
}

export default Desktop