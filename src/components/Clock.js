function Clock(){
    return(
        <div className="text-xs text-gray-800">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    )
}

export default Clock