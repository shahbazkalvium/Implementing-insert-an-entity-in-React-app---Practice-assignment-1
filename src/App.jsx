import React from 'react';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import AddBook from './components/Addbook';
import './App.css'; // Import global styles

function App() {
  return (
  <Router>
    <Routes>
    <Route path='/home'element={<Home/>}/>
    <Route path='/add-book'element={<AddBook/>}/>
    </Routes>
    </Router>
  )
}

export default App;