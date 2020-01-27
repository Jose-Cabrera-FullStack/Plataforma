import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectDate, deleteSelectedDate } from '../../actions';
import '../../assets/styles/components/Principal.scss';
import { submitSelectedDate } from '../../actions';

const Agenda = props => {

    const [form, setValues] = useState({
        user_id:'',
        schedule: '',
        coach: '',
        type: '',
        premium: false,
        price: '',
      });

      console.log('dato proveniente de otro componente: '+ props.currentDay)
    const handleInput = (event) => {
    setValues({
        ...form,
        [event.target.name]: event.target.value,
    });
    // console.log(event.target.value)
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitSelectedDate(form, '/login');
    };

    const total = () => {
        return props.currentDay + 10
    }


    return (
    <section className="">
        <form onSubmit={handleSubmit}>
            <input required onChange={handleInput} className="input" type="text" name="user_id" placeholder="user_id" />
            {/* <input required onChange={handleInput} className="input" type="text" name="schedule" placeholder="schedule"value={props.currentDay}/> */}
            <input required onChange={handleInput} className="input" type="text" name="schedule" placeholder="schedule"/>
            <input required onChange={handleInput} className="input" type="text" name="coach" placeholder="coach"/>
            <input required onChange={handleInput} className="input" type="text" name="type" placeholder="type"/>
            <input required onChange={handleInput} className="input" type="text" name="price" placeholder="price" value={total()}/>
            <input required onChange={handleInput} className="input" type="text" name="premium" placeholder="premium"/>

            <button className="btn__secondary" type="submit">Pagar!</button>
        </form>
    </section>
    )
}

  

const mapDispatchToProps = {
    selectDate,
    deleteSelectedDate,
    submitSelectedDate
  };

export default connect(null, mapDispatchToProps)(Agenda);