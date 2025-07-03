import '../styles/index.css';
import { Fragment } from 'react/jsx-runtime';
import Desktop from './Desktop'
import Taskbar from './Taskbar'
import { useState, useContext } from 'react'
import Window from './Window'
import BSOD from './BSOD'
import { FontContext } from '../FontContext';
  

function App() {
  const { bgColor } = useContext(FontContext);
  const [windows, updateWindows] = useState([])
  const [bsodVisible, updateBSOD] = useState(false)
  return (
    <Fragment>
    <div id="bg-main" className={`bg-[${bgColor}] font-mono h-screen flex flex-col`}>
      <Desktop windows={windows} updateWindows={updateWindows}/>
      <Taskbar windows={windows} updateWindows={updateWindows} updateBSOD={updateBSOD}/>
      {windows.map((wind, index) =>
        (wind.visibility && (
          <Window key={`${wind.name}-${index}`} name={wind.name} windows={windows} updateWindows={updateWindows}
          />
        ))
      )}
    </div>
    { bsodVisible && <BSOD updateBSOD={updateBSOD}/>}
  </Fragment>
  );
}

export default App;
