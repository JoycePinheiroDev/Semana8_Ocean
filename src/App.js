import React from 'react';
import '../src/App.css'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
  

import Manatee from '../src/components/Manatee/Manatee';
import Narwhal from '../src/components/Narwhal/Narwhal';
import Whale from '../src/components/Whale/Whale';

// mudanças no route path, switch não funciona e navlink

function App() {
  return (
    <div className='wrapper'>
      <h1>Marine Mammals</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li><NavLink to='/manatee'>Manatee</NavLink></li>
            <li><NavLink to='/narhwal'>Narwhal</NavLink></li>
            <li><NavLink to='/whale'>Whale</NavLink></li>
            
            <li><NavLink to='/whale/beluga'>Beluga Whale</NavLink></li>
            <li><NavLink to='/whale/blue'>Blue Whale</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/manatee' element={<Manatee />} />
          <Route path='/narhwal' element={<Narwhal />} />
          <Route path='/whale' element={<Whale />} />
          <Route path='/whale/:type' element={<Whale />}/> 
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
