import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendConfirmation } from '../actions';

import '../assets/styles/components/Confirm.scss';

const Confirm = (props) => {
  let idCompleted = props.match.params.id
  let idWithoutColon = idCompleted.substr(1, idCompleted.lenght)
  
  props.sendConfirmation(idWithoutColon)

  return (
    <div className="App">

      <h1>¡FELICIDADES, YA ERES PARTE DE LA COMUNIDAD DE SUMMONERS!</h1>

    </div>

  );
}

const mapDispatchToProps = {
  sendConfirmation,
};


export default connect(null, mapDispatchToProps)(Confirm);