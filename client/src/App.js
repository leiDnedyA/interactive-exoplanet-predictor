import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import DataEntry from './pages/DataEntry';
import Predictions from './pages/Predictions';
import {FaGithub} from 'react-icons/fa'
import WorldModel from './elements/WorldModel';

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
      </Routes>

      {/* 
      REMINDER:
        Change github link once we change the link for the project
      */}

      <div className="footer"><a href="https://github.com/leiDnedyA/interactive-exoplanet-predictor/">Follow us on GitHub! <FaGithub/></a></div>
    </div>
  );
}

export default App;
