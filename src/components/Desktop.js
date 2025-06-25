import Application from './Application'
import applicationsList from '../datas/ApplicationList'

function Desktop({windows, updateWindows}){

    function handleWindow(name){
        const alreadyExist = windows.find((wind) => wind.name === name)
        if(alreadyExist){
            const windowsFiltered = windows.filter((wind) => wind.name!==name)
            updateWindows([...windowsFiltered, {'name':name, 'visibility':true}])
        }
        else{
            updateWindows([...windows, {'name': name, 'visibility': true}])
        }
    }

    return(
    <>
    <div className="flex-1 relative p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 text-white text-sm">
            {applicationsList.map((app, index)=><Application key={`${app.name}-${index}`} name={app.name} icon={app.icon} onClick={() => handleWindow(app.name)} />)}
        </div>
    </div>
    </>
    )
}

export default Desktop