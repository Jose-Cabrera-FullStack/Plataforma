import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendConfirmation } from '../actions';

import '../assets/styles/components/Confirm.scss';

const Confirm = (props) => {
  let idCompleted = props.match.params.id
  let idWithoutColon = idCompleted.substr(1, idCompleted.lenght)

  const [form, setValues] = useState({
    id: idWithoutColon
});

  const handleSubmit = (event) => {
    event.preventDefault();
    props.sendConfirmation(form, '/login');
  };

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="App">

      <h1>¡FELICIDADES, YA ERES PARTE DE LA COMUNIDAD DE SUMMONERS!</h1>
      <form onSubmit={handleSubmit}>
      <input className="input input__none" 
                type="text" 
                name="id" 
                placeholder="Ingresa su email aquí" 
                onChange={handleInput}
                value={idWithoutColon}
                required/>

      <button className="btn__secondary" type="submit">INGRESA A SUMMONER'S CAVE</button>
      </form>

    </div>

  );
}

const mapDispatchToProps = {
  sendConfirmation,
};


export default connect(null, mapDispatchToProps)(Confirm);