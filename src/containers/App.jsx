import React, { useState, useEffect } from 'react';

import Principal from '../components/Principal';
import Services from '../components/Services';
import EloBoostingPack from '../components/EloBoostingPack';
import Reviews from '../components/Reviews';
import HowToBuy from '../components/HowToBuy';
import OurMethodology from '../components/OurMethodology';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  return(
    <div className="App">
      <Principal/>
      <Services/>
      <EloBoostingPack/>
      <Reviews/>
      <HowToBuy/>
      <OurMethodology/>
      <Footer/>
      

    </div>

  );
}

export default App;