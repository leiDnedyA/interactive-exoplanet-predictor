import './App.css';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import DataEntry from './pages/DataEntry';
import Predictions from './pages/Predictions';
import {FaGithub} from 'react-icons/fa'
import WorldModel from './elements/WorldModel';
import Loading from './pages/Loading';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Star System Generator</h1>
        <p>Predict data about star systems based on basic information about the star!</p>
      </div>
      <Routes>
        <Route path="/" element={<DataEntry/>}/>
        <Route path="/predictions" element={<Predictions/>}/>
        <Route path="/model" element={<WorldModel/>}/>
        <Route path="/loading" element={<Loading/>}/>
      </Routes>

      {/* 
      REMINDER:
        Change github link once we change the link for the project
      */}

      <div className="footer"><strong>BETA:</strong> <Link to="/model">Interactive 3D Model</Link> | Give us a star on <a href="https://github.com/leiDnedyA/interactive-exoplanet-predictor/">GitHub</a>! <FaGithub/></div>
    </div>
  );
}

export default App;
