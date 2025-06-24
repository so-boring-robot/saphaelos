
function Application({name, icon, onClick}){
    return(
        <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
            <img
            src={icon}
            className="w-10 h-10 mb-1"
            alt={name}
            />
            <span className="bg-black bg-opacity-40 px-1">{name}</span>
        </div>
    )
}

export default Application