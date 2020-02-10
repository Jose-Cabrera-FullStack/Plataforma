import React from 'react';
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
    
    const handleDate = (value) => {
        let arr = []
        value.map(v => arr.push(v.value))
        props.handlerChangeDate(true)
        props.handlerDate(arr)
    }
    console.log(props.valueState)

    return (
        <section className="selected__date">
            <Select
                closeMenuOnSelect={false}
                defaultValue={DATE[0]}
                components={animatedComponents}
                isMulti
                options={DATE}
                onChange= {handleDate}
            />
        </section>
    )
}

export default Date;