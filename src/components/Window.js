import '../styles/Window.css'
import { useEffect, useState, useRef } from 'react';
import FileExplorer from './FileExplorer'
import WebBrowser from './WebBrowser'
import GoobleBrome from './GoobleBrome';
import Profil from './Profil'

function Window({ name, windows, updateWindows }) {
  const windowRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      if (dragging && !maximized) {
        setPosition({
          x: Math.max(0, Math.min(e.clientX - offset.current.x, window.innerWidth - windowRef.current.offsetWidth)),
          y: Math.max(0, Math.min(e.clientY - offset.current.y, window.innerHeight - windowRef.current.offsetHeight)),
        });
      }
    }

    function handleMouseUp() {
      setDragging(false);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, maximized]);

  function handleMouseDown(e) {
    if (!windowRef.current || maximized) return;
    const rect = windowRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setDragging(true);
  }

  function handleReduceWindow(name) {
    const updated = windows.map((wind) => wind.name===name ? {...wind, 'visibility':!wind.visibility} : wind )
    updateWindows(updated);
  }

  function handleQuitWindow(name) {
    const windowsFiltered = windows.filter((wind) => wind.name !== name);
    updateWindows([...windowsFiltered]);
  }

  function handleToggleMaximize() {
    setMaximized((prev) => !prev);
  }

  const windowContent = () => {
    switch (name){
      case "Poste de travail":
        return <FileExplorer/>
      case "Fireracoon":
        return <WebBrowser/>
      case "Gooble Brome":
        return <GoobleBrome/>
      case "Profil":
        return <Profil/>
      default:
        return <></>
    }
  }

  return (
    <div ref={windowRef} style={maximized ? { left: 0, top: 0, width: '100vw', height: 'calc(100vh - 2.5rem)' } : { left: position.x, top: position.y, height: '400px' }} className={`absolute flex flex-col ${maximized ? '' : 'w-[90vw] md:w-[700px]'} win95-border text-sm text-black`}>
      <div className="win95-titlebar flex justify-between items-center cursor-move px-2" onMouseDown={handleMouseDown}>
        <span>{name}.exe</span>
        <div className="flex gap-1">
          <button className="win95-button w-6 h-6" onClick={() => handleReduceWindow(name)}>_</button>
          <button className="win95-button w-6 h-6" onClick={handleToggleMaximize}>□</button>
          <button className="win95-button w-6 h-6" onClick={() => handleQuitWindow(name)}>X</button>
        </div>
      </div>
      {windowContent()}
    </div>
  );
}

export default Window;
