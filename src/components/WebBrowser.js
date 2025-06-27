import SearchWebPage from "./SearchWebPage"
function WebBrowser(){
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
            <SearchWebPage/>
        </>
    )
}

export default WebBrowser