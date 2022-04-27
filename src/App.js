import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './pages/Login';


import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
