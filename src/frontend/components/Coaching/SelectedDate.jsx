import React from 'react';
import '../../assets/styles/components/Principal.scss';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import '../../assets/styles/components/Schedule/SelectedDay.scss';


const animatedComponents = makeAnimated();

const Date = props => {
    let DATE = [
        { value: props.formatDateIso, label: props.formatDateIso },


    ]

    const handleDate = (value) => {
        let arr = []
        value.map(v => arr.push(v.value))
        props.handlerChangeDate(true)
        props.handlerDate(arr)
    }

    return (
        <section >
            <h2 className="selected__date__title">Confirma las fechas en la que quieres ver las clases personalizadas</h2>
            <div className="selected__date__form">
                <Select
                    closeMenuOnSelect={false}
                    onSelectResetsInput={true}
                    defaultValue={DATE[0]}
                    components={animatedComponents}
                    isMulti
                    options={DATE}
                    onChange={handleDate}
                />

            </div>
        </section>
    )
}

export default Date;