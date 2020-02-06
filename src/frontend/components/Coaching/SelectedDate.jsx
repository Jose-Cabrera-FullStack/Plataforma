import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectDate, deleteSelectedDate } from '../../actions';
import '../../assets/styles/components/Principal.scss';
import { submitSelectedDate } from '../../actions';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const DATE = [
    { value: '12:00', label: '12:00' },
    { value: '13:00', label: '13:00' },
    { value: '14:00', label: '14:00' },
    { value: '15:00', label: '15:00' },
    { value: '16:00', label: '16:00' },
]

const animatedComponents = makeAnimated();

const Agenda = props => {

    return (
        <section className="selected__date">
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={DATE[0]}
                isMulti
                options={DATE}
            />
        </section>
    )
}



const mapDispatchToProps = {
    selectDate,
    deleteSelectedDate,
    submitSelectedDate
};

export default connect(null, mapDispatchToProps)(Agenda);