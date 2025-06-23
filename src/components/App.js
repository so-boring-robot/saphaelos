import '../styles/index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Fragment } from 'react/jsx-runtime';
import Desktop from './Desktop'
import Taskbar from './Taskbar'

function App() {

  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <title>SaphaelOS</title>
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        </Helmet>
    </HelmetProvider>
    
    <div className="bg-[#008080] font-mono h-screen flex flex-col">
      <Desktop/>
      <Taskbar/>
    </div>
  </Fragment>
  );
}

export default App;
