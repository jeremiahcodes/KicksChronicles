import React, { useEffect, useState } from 'react';
import { Footer, Header } from '../Components';
import { brandModel } from '../Interfaces';
import { Home, NotFound } from '../Pages';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/KicksChronicles" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
