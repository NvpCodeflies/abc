import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from './layouts/LayoutDefault';
import Home from './pages/Home';

import './assets/css/fonts.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import './global.css';
import Vulnerbility from './pages/Vulnerbility';

function App() {
  return (
    <>

{/* basename="/remedy" */}
    <BrowserRouter  >
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/:vulnerbilityId" element={<LayoutDefault />}>
          <Route index element={<Vulnerbility />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
