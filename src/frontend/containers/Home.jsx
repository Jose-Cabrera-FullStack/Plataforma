import React from 'react';
import {connect} from 'react-redux';

import Principal from '../components/Principal/Principal';
import Services from '../components/Principal/Services';
import CoachBoostingPack from '../components/CoachBoostingPack';
import Reviews from '../components/Reviews';
import HowToBuy from '../components/Principal/HowToBuy';
import OurMethodology from '../components/Principal/OurMethodology';
import '../assets/styles/App.scss';

const Home = () => {
  return(
    <div className="App">

        <Principal/>
        <Services/>
        <CoachBoostingPack/>
        <Reviews/>
        <HowToBuy/>
        <OurMethodology/>   

    </div>

  );
}

export default connect(null,null)(Home);