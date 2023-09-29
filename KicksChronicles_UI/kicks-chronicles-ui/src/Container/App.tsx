import React, { useEffect, useState } from 'react';
import { Footer, Header } from '../Components';
import { brandModel } from '../Interfaces';
import { Home } from '../Pages';


function App() {
  return (
        <div>
        <Header/>
          <Home/>
        <Footer/>
      </div>
  );
}

export default App;
