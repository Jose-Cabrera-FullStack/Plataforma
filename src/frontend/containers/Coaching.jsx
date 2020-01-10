import React from 'react';
import {connect} from 'react-redux';

import Agenda from '../components/Coaching/Agenda';

import '../assets/styles/App.scss';
const Boosting = () => {
    return(
      <div className="App">
      
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