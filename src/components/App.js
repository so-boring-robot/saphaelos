import '../styles/index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from 'react/jsx-runtime';
import Desktop from './Desktop'
import Taskbar from './Taskbar'
import { useState } from 'react'
import Window from './Window'


function App() {
  const [windows, updateWindows] = useState([])
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
      <Taskbar windows={windows} updateWindows={updateWindows}/>
      {windows.map((wind, index) =>
        (wind.visibility && (
          <Window key={`${wind.name}-${index}`} name={wind.name} windows={windows} updateWindows={updateWindows}
          />
        ))
      )}
    </div>
  </Fragment>
  );
}

export default App;
