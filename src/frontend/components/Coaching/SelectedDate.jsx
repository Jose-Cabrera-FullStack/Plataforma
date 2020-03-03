import React from 'react';
import '../../assets/styles/components/Principal.scss';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { components } from "react-select";
import '../../assets/styles/components/Schedule/SelectedDay.scss';


const animatedComponents = makeAnimated();

const Menu = props => {
    const optionSelectedLength = props.getValue().length || 0;
    return (
      <components.Menu {...props}>
        {optionSelectedLength < 5 ? (
          props.children
        ) : (
          <div style={{ margin: 15 }}>Solo se puede escoger 5 fechas distintas.</div>
        )}
      </components.Menu>
    );
  };

  const isValidNewOption = (inputValue, selectValue) =>
    inputValue.length > 0 && selectValue.length < 5;
  

const Dates = props => {
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
                    isValidNewOption={isValidNewOption}
                    components={{Menu}}
                    isMulti
                    options={DATE}
                    onChange={handleDate}
                />

            </div>
        </section>
    )
}

export default Dates;