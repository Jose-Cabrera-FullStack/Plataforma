import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

import { selectDate, deleteSelectedDate } from '../../actions';
import { submitSelectedDate } from '../../actions';
import { connect } from 'react-redux';

const PaypalCheckoutButton = (props) => {

  const paypalConf = {
    currency: 'USD',
    env: 'sandbox',//pasar a poduccion
    client: {
      sandbox: 'AZfahP9W_0_g74mkO4jzUQuj5_ZzGOhAMsG_qPs5NrZGijmWEQ6HVwH0kWplw_pob1ykr2cDah1XfA88',
      production: '--',
    },
    style: {
      label: 'pay',
      size: 'medium', // small | medium | large | responsive
      shape: 'pill',   // pill | rect
      color: 'gold',  // gold | blue | silver | black
    },
  };

  const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

  const payment = (data, actions) => {
    const payment = {
      transactions: [
        {
          item_list:'pruebita',
          amount: {
            total: props.order.total,
            currency: paypalConf.currency,
          },
          description: 'Compra en Test App',
          custom: props.order.customer || '',
          item_list: {
            items: props.order.items,
            
          },
        },
      ],
      note_to_payer: 'Contáctanos para cualquier aclaración sobre tu compra.',
    };

    return actions.payment.create({
      payment,
    });
  };

  const onAuthorize = (data, actions) => {
      return actions.payment.execute()
      .then(response => {
        // console.log(response);
        props.submitSelectedDate(props.form, '/perfil');
        alert(`El Pago fue procesado correctamente, ID: ${response.id}`)
      })
      .catch(error => {
        console.log(error);
	      alert('Ocurrió un error al procesar el pago con Paypal');
      });
  };

  const onError = (error) => {
    console.log('props',props);
    alert ('El pago con PayPal no fue realizado, vuelva a intentarlo.' );
  };

  const onCancel = (data, actions) => {
    props.selectDate(form)
    props.submitSelectedDate(form, '/login');
    alert( 'El pago con PayPal no fue realizado, el usuario canceló el proceso.' );
  };


  return (
    <PayPalButton
      env={paypalConf.env}
      client={paypalConf.client}
      payment={(data, actions) => payment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(error) => onError(error)}
      style={paypalConf.style}
      commit
      locale="es_AR"
    />

  );
}

const mapDispatchToProps = {
  selectDate,
  deleteSelectedDate,
  submitSelectedDate
};



export default connect(null, mapDispatchToProps)(PaypalCheckoutButton);
