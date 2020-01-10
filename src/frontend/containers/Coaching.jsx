import React from 'react';
import {connect} from 'react-redux';

import Agenda from '../components/Coaching/Agenda';
import Coaching from '../components/Coaching/Coaching';

import '../assets/styles/App.scss';
const Boosting = () => {
    return(
      <div className="App">
      
            <Coaching/>
            <Agenda/>

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