import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

import { selectDate, deleteSelectedDate } from '../../actions';
import { submitSelectedDate } from '../../actions';
import { connect } from 'react-redux';

const PaypalCheckoutButton = (props) => {

  const paypalConf = {
    currency: 'USD',
    env: 'production',//pasar a produccion
    client: {
      sandbox: 'AZfahP9W_0_g74mkO4jzUQuj5_ZzGOhAMsG_qPs5NrZGijmWEQ6HVwH0kWplw_pob1ykr2cDah1XfA88',
      production: 'AUfrNdYdfVHyNfVC9he8rozBaXq2NRbMO92jOPiM_bZ_zzwZ7KhjYmv1QpiQy87R9Uy1GmsInRXMs9Rs',
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
          item_list:'Sesiones de League of Legends',
          amount: {
            total: props.order.total,
            currency: paypalConf.currency,
          },
          description: 'Clases personalizadas para jugar de manera profesional League of Legends',
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
