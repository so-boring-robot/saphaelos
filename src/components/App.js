import '../styles/index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from 'react/jsx-runtime';
import Desktop from './Desktop'
import Taskbar from './Taskbar'
import { useState } from 'react'
import Window from './Window'


function App() {
  const [isVisible, setVisible] = useState(true) // file explorer

  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <title>SaphaelOS</title>
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        </Helmet>
    </HelmetProvider>
    
    <div className="bg-[#008080] font-mono h-screen flex flex-col">
      <Desktop setVisible={setVisible}/>
      <Taskbar setVisible={setVisible}/>
      {isVisible && <Window setVisible={setVisible}/>}
    </div>
  </Fragment>
  );
}

export default App;
