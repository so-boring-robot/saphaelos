import React, { useContext } from 'react';
import { FontContext } from '../FontContext';
import '../styles/Settings.css'; // pour les styles Windows 95
import {availableFonts, availableSizes} from '../datas/Settings.js'

function Settings() {
  const { font, setFont, fontSize, setFontSize, bgColor, setBgColor } = useContext(FontContext);
 
  return (
    <div className="flex flex-grow overflow-auto bg-[#c0c0c0] font-[PerfectDOSVGA437] p-4">
      <div className="window-body w-full">
        <fieldset>
          <legend>Police</legend>
          <label htmlFor="font-select">Choisir une police :</label>
          <select id="font-select" value={font} onChange={(e) => setFont(e.target.value)}>
            {availableFonts.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <legend>Taille de police</legend>
          <label htmlFor="font-size-select">Choisir une taille :</label>
          <select id="font-size-select" value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            {availableSizes.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <legend>Couleur du fond d'écran</legend>
          <label htmlFor="font-size-select">Choisir une couleur :</label>
          <input type="color" id="favcolor" value={bgColor} onChange={(e) => setBgColor(e.target.value)}/>
        </fieldset>

        <div className="button-row">
          <button onClick={() => { setFont('sans-serif'); setFontSize('16px'); setBgColor("#008080") }}>
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
