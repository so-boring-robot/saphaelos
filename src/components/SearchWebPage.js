import fireracoon from '../assets/fireracoon.png'

function SearchWebPage(){
    return(
        <div className="bg-gray-200 flex-grow flex overflow-auto">
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="flex flex-row items-center">
                        <img src={fireracoon} alt="fireracoon" className="w-50 h-50"/>
                        <h1 className="text-4xl font-mono font-bold"> Fireracoon</h1>
                    </div>
                    <div className="flex flex-row items-center w-100">
                        <input className="shadow-md appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search with our homemade browser"></input>
                    </div>
                </div>
            </div>
    )
}

export default SearchWebPage