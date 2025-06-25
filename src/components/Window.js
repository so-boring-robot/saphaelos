import '../styles/Window.css'
import { useEffect, useState, useRef } from 'react';

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

  function handleReduceWindow() {
    const windowsFiltered = windows.filter((wind) => wind.name !== name);
    updateWindows([...windowsFiltered, { name: name, isVisible: false }]);
  }

  function handleQuitWindow() {
    const windowsFiltered = windows.filter((wind) => wind.name !== name);
    updateWindows([...windowsFiltered]);
  }

  function handleToggleMaximize() {
    setMaximized((prev) => !prev);
  }

  return (
    <div ref={windowRef} style={maximized ? { left: 0, top: 0, width: '100vw', height: 'calc(100vh - 2.5rem)' } : { left: position.x, top: position.y, height: '400px' }} className={`absolute flex flex-col ${maximized ? '' : 'w-[90vw] md:w-[700px]'} win95-border text-sm text-black`}>
      <div className="win95-titlebar flex justify-between items-center cursor-move px-2" onMouseDown={handleMouseDown}>
        <span>{name}</span>
        <div className="flex gap-1">
          <button className="win95-button w-6 h-6" onClick={handleReduceWindow}>_</button>
          <button className="win95-button w-6 h-6" onClick={handleToggleMaximize}>□</button>
          <button className="win95-button w-6 h-6" onClick={handleQuitWindow}>X</button>
        </div>
      </div>

      <div className="win95-content flex-grow flex overflow-auto">
        <div className="w-1/3 border-r border-gray-500 pr-2 py-2">
          <ul className="space-y-1">
            <li>📁 Poste de travail</li>
            <li className="ml-4">📁 Disque C:</li>
            <li className="ml-8">📁 Programmes</li>
            <li className="ml-8">📁 Utilisateurs</li>
            <li className="ml-4">📁 Disque D:</li>
          </ul>
        </div>

        <div className="w-2/3 pl-4 py-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png"
                className="w-10 h-10"
                alt="Dossier"
              />
              <span>Photos</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://win98icons.alexmeub.com/icons/png/notepad_file-4.png"
                className="w-10 h-10"
                alt="Fichier"
              />
              <span>notes.txt</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://win98icons.alexmeub.com/icons/png/msdos_file-4.png"
                className="w-10 h-10"
                alt="Fichier"
              />
              <span>autoexec.bat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Window;
