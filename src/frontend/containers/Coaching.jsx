import React from 'react';
import {connect} from 'react-redux';
import Coaching from '../components/Coaching/Coaching';
import Services from '../components/Principal/Services';
import EloBoostingPack from '../components/EloBoostingPack';
import Reviews from '../components/Reviews';
import HowToBuy from '../components/Principal/HowToBuy';
import OurMethodology from '../components/Principal/OurMethodology';
import '../assets/styles/App.scss';
const Boosting = () => {
    return(
      <div className="App">
          <Coaching/>

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

  export default connect(mapStateToProps,null)(Boosting);