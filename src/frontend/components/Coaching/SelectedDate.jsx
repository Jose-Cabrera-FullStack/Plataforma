import React, { useState, useEffect } from 'react';
import '../../assets/styles/components/Principal.scss';
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

const Date = props => {
    
    const handlePrueba = (event) => {
        props.handlerPrueba([1,'esto es un array',3,4,5])

    }

    const handlerArray = (value) =>{
        let arr = []
        value.map(v => arr.push(v.value))
        console.log(arr)
    }

    console.log(handlerArray)

    return (
        <section className="selected__date">
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={DATE[0]}
                isMulti
                options={DATE}
                onChange= {handlerArray}
            />
            <button onClick={handlePrueba} name="prueba">click on me!</button>
        </section>
    )
}

export default Date;