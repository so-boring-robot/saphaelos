function FileExplorer(){
    return(
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
    )
}

export default FileExplorer