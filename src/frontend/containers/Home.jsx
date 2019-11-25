import React from 'react';
import {connect} from 'react-redux';

import Principal from '../components/Principal';
import Services from '../components/Services';
import EloBoostingPack from '../components/EloBoostingPack';
import Reviews from '../components/Reviews';
import HowToBuy from '../components/HowToBuy';
import OurMethodology from '../components/OurMethodology';
import '../assets/styles/App.scss';

const Home = () => {
  return(
    <div className="App">

      <Principal/>
      <Services/>
      <EloBoostingPack/>
      <Reviews/>
      <HowToBuy/>
      <OurMethodology/>      

    </div>

  );
}

const mapStateToProps = state => {
  return{

    myList: state.myList,
    trends: state.trends,
    originals: state.originals,

  }
}

export default connect(mapStateToProps,null)(Home);