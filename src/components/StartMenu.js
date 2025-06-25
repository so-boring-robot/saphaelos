import { useState, useEffect, useRef } from 'react'
import icon from '../assets/logo_placeholder.png'

function StartMenu({setVisible, setTaskIsVisible}){
    const [menuVisible, setMenuVisible] = useState(false)
      const menuRef = useRef(null)
      const buttonRef = useRef(null)
    
      useEffect(() => {
        function handleClickOutside(event) {
          if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            !buttonRef.current.contains(event.target)
          ) {
            setMenuVisible(false)
          }
        }
    
        window.addEventListener('click', handleClickOutside)
        return () => window.removeEventListener('click', handleClickOutside)
      }, [])

      function handleWindow(){
        setVisible(true)
        setTaskIsVisible(true)
      }

    return(
        <>
        <button ref={buttonRef} className="flex items-center bg-gray-200 text-sm px-3 py-1 win95-border" onClick={() => setMenuVisible(!menuVisible)}>
          <img src={icon} alt="start icon" className="w-6 h-6"/>
          <span>Start</span>
        </button>

        {menuVisible && (
          <div
            ref={menuRef}
            className="absolute bottom-10 left-2 bg-gray-200 border win95-border text-sm menu z-10"
          >
            <ul className="p-1">
              <li className="hover:bg-blue-600 hover:text-white px-2 py-1 cursor-pointer" onClick={handleWindow}>
                Programmes
              </li>
              <li className="hover:bg-blue-600 hover:text-white px-2 py-1 cursor-pointer" onClick={handleWindow}>
                Paramètres
              </li>
              <li className="hover:bg-blue-600 hover:text-white px-2 py-1 cursor-pointer" onClick={handleWindow}>
                Arrêter
              </li>
            </ul>
          </div>
        )}
        </>
    )
}

export default StartMenu