import fireracoon from '../assets/fireracoon.png'
function Internet(){
    return(
        <>
        <div className="flex bg-gray-400 justify-start items-center px-2">
            <div className="inline-flex">
                <button className="px-2"> ↩ </button>
                <button className="px-2"> ↪ </button>
                <button className="px-2"> ↺ </button>
            </div>
            <div className="w-full flex">
                <input type="text" className="bg-gray-300 border rounded border-black-500 w-1/2 px-3 text-gray-700 m-2 focus:outline-none focus:shadow-outline" placeholder='Search with our homemade browser'/>
            </div>
        </div>
            <div className="win95-content flex-grow flex overflow-auto">
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="flex flex-row items-center">
                        <img src={fireracoon} alt="fireracoon" className="w-50 h-50"/>
                        <h1 className="text-4xl font-mono font-bold"> Fireracoon</h1>
                    </div>
                    <div className="flex flex-row items-center w-100">
                        <input class="shadow-md appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search with our homemade browser"></input>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Internet