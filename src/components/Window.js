import '../styles/Window.css'
import {useEffect, useState, useRef} from 'react';

function Window({setVisible}){
    const windowRef = useRef(null);
    const [position, setPosition] = useState({ x: 100, y: 100 }); // Position initiale
    const [dragging, setDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(e) {
        if (dragging) {
            setPosition({
            x: e.clientX - offset.current.x,
            y: e.clientY - offset.current.y,
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
    }, [dragging]);

    function handleMouseDown(e) {
        if (!windowRef.current) return;
        const rect = windowRef.current.getBoundingClientRect();
        offset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        };
        setDragging(true);
    }
    
    return (
        <div ref={windowRef} style={{ left: position.x, top: position.y }} className="absolute w-[700px] win95-border text-sm text-black">
            <div className="win95-titlebar flex justify-between items-center cursor-move" onMouseDown={handleMouseDown}>
                <span>Explorateur Windows</span>
                <div className="flex gap-1">
                <button className="win95-button w-6 h-6">_</button>
                <button className="win95-button w-6 h-6">□</button>
                <button className="win95-button w-6 h-6" onClick={() => setVisible(false)}>X</button>
                </div>
            </div>

            <div className="win95-content flex h-80">
                <div className="w-1/3 border-r border-gray-500 pr-2">
                    <ul className="space-y-1">
                        <li>📁 Poste de travail</li>
                        <li className="ml-4">📁 Disque C:</li>
                        <li className="ml-8">📁 Programmes</li>
                        <li className="ml-8">📁 Utilisateurs</li>
                        <li className="ml-4">📁 Disque D:</li>
                    </ul>
                </div>

                <div className="w-2/3 pl-4">
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
        )

}

export default Window