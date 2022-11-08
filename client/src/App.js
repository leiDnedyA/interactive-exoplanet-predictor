import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import DataEntry from './pages/DataEntry';
import Predictions from './pages/Predictions';

function App() {
  return (
    <div className="App">
      <h1>Star System Data Predictor</h1>
      <p>Predict data about star systems based on basic information about the star!</p>
      <Routes>
        <Route path="/" element={<DataEntry/>}/>
        <Route path="/" element={<Predictions/>}/>
      </Routes>
    </div>
  );
}

export default App;
