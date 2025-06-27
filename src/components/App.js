import '../styles/index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from 'react/jsx-runtime';
import Desktop from './Desktop'
import Taskbar from './Taskbar'
import { useState } from 'react'
import Window from './Window'
import BSOD from './BSOD'


function App() {
  const [windows, updateWindows] = useState([])
  const [bsodVisible, updateBSOD] = useState(false)
  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <title>SaphaelOS</title>
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        </Helmet>
    </HelmetProvider>
    
    <div className="bg-[#008080] font-mono h-screen flex flex-col">
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
