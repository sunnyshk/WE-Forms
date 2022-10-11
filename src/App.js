import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Feedback from './components/Feedback';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
    </div>
  );
}

export default App;
