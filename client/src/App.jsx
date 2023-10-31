import './App.css';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import DataEntry from './pages/DataEntry';
import Predictions from './pages/Predictions';
import {FaGithub} from 'react-icons/fa'
import WorldModel from './elements/WorldModel';
import Loading from './pages/Loading';

const AYDEN_LINK = "http://github.com/leiDnedyA";
const EDWARD_LINK = "https://github.com/gaiborjosue";
const PROJECT_LINK = "https://github.com/leiDnedyA/interactive-exoplanet-predictor/";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Star System Generator</h1>
        <p>Predict data about star systems based on basic information about the star!</p>
      </div>
	{/*
      <Routes>
        <Route path="/" element={<DataEntry/>}/>
        <Route path="/predictions" element={<Predictions/>}/>
        <Route path="/model" element={<WorldModel/>}/>
        <Route path="/loading" element={<Loading/>}/>
      </Routes>
		*/}	
	  <WorldModel/>
      <div className="footer">
        ML model by <a href={EDWARD_LINK}>Edward Gaibor</a>, 
        site by <a href={AYDEN_LINK}>Ayden Diel</a> | 
        Give us a star on <a href={PROJECT_LINK}>GitHub <FaGithub/></a> !
      </div>
    </div>
  );
}

export default App;
