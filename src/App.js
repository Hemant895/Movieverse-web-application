import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Addmovie from './components/Addmovie';
function App() {
  return (
    <Router>
    <div className="App">
      < Header/>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/addmovie" element={<Addmovie/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
