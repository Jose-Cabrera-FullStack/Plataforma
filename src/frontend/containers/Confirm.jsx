import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/Confirm.scss';

const Confirm = (props) => {
  let idCompleted = props.match.params.id
  let idWithoutColon = idCompleted.substr(1, idCompleted.lenght)

  let propsID = props.id

  return (
    <div className="App">

      {propsID.map(user => {
        if (user === idWithoutColon) {
          return (
            <>
              <h1>¡FELICIDADES, YA ERES PARTE DE LA COMUNIDAD DE SUMMONERS!</h1>
              <a className="link" href="http://localhost:4000/login">HAZ LOGIN CON TU NUEVO USER</a>
            </>
          )
        }
      })}

    </div>

  );
}


const mapStateToProps = (state) => {
  return {
    id: state.id
  };
};

export default connect(mapStateToProps, null)(Confirm);