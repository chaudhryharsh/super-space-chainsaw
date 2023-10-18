import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './main';
import Home from './pages/home';
import About from './pages/about'
import Character from './pages/character';
import {DataFromApi} from './context/dataFromApi';

function App() {
  return (
    <BrowserRouter>
      <DataFromApi>
          <Routes>
            <Route path='/' element={<Main/>}>
              <Route index element={<Home/>}/> 
              <Route path='character/:id' element={<Character/>}/>
              <Route path='about' element={<About/>}/>
            </Route>
          </Routes>
      </DataFromApi>
    </BrowserRouter>
  );
}

export default App;
