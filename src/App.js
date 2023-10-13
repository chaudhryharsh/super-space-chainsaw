import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './main';
import Home from './pages/home';
import About from './pages/about'
import Character from './pages/character';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route index element={<Home/>}/> 
          <Route path='character/:id' element={<Character/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
