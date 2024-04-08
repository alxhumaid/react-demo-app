import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import FeaturePage from './Components/Pages/FeaturePage';



const App = () => {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/feature" element={<FeaturePage/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App