import React from 'react';
import '../../assets/styles/components/Principal.scss';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


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
        <section className="selected__date">
            <Select
                closeMenuOnSelect={false}
                onSelectResetsInput = {true}
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