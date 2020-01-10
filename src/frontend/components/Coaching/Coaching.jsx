import React from 'react';
import {connect} from 'react-redux';

import '../../assets/styles/components/Principal.scss';


const Coaching = (props) =>{
    const { user,data,myClass } = props;

    return(
        <section className="principal">
<h1>Va el calendario</h1>
</section>
)
} 

const mapStateToProps = (state) => {
    return {
      user: state.user,
      data: state.data,
      myClass: state.myClass
    };
  };

export default connect(mapStateToProps,null)(Coaching);