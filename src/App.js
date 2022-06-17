import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate 
} from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Resume from './components/pages/resume';
import Articles from './components/pages/articles';
import PreLoader from './components/organisms/utils/preloader';
import NavBar from './components/organisms/molecules/navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePath, setActivePath] = useState('/');
  
  useEffect(() => {
    console.log(window.location.pathname); 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <PreLoader isLoading={isLoading} />
      <div className="App text-white" id={isLoading ? "no-scroll" : "scroll"}>
        <NavBar activePath={activePath} />
        <Routes>
          <Route path='/' element={<Home setPath={setActivePath} />} />
          <Route path='/about' element={<About setPath={setActivePath} />} />
          <Route path='/projects' element={<Projects setPath={setActivePath} />} />
          <Route path='/resume' element={<Resume setPath={setActivePath} />} />
          <Route path='/articles' element={<Articles setPath={setActivePath} />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
