import React from 'react';
import moment from 'moment';

import information from '../../assets/static/images/info-violet.svg'

import Agenda from './Agenda';
import SelectedDate from './SelectedDate';

import '../../assets/styles/components/Schedule/Calendar.scss';
import '../../assets/styles/components/Schedule/Schedule.scss';

const localStorageName = 'calendar-events';

export default class Calendar extends React.Component {
    state = {
        dateContext: moment(),
        today: moment().format("D"),
        todayMonth: moment().format("MM"),
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: moment().format("D"),
        selectedMonth: moment().format("MM"),
        selectedYear: moment().format("YYYY"),
        eventList: this.eventList || [], // arreglar el localStorage
        changeDate: false
    };


    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
        this.style.width = this.width; // add this
        this.toggle = {
            close:true,
        }

        this.eventList = {}; // array with all dates choosen
    }


    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();

    getInitialState =  () => {
        return {
          hover: false
        };
    }

    hoverOn =  () => {
        this.setState({ hover: true });
    }
    
    hoverOff =  () => {
        this.setState({ hover: false });
    }

    toggleFunction = () => {
        this.setState({
            close: !this.toggle.close,
        });
    };

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        return this.state.dateContext.toDate();
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }
    currentMonth = () => {
        return this.state.dateContext.format("MM");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext,
            selectedMonth: parseInt(this.currentMonth()) + 1
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext,
            selectedMonth: parseInt(this.currentMonth()) - 1
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();

    }
    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e) => { this.onSelectChange(e, data) }}>
                        {data}
                    </a>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    }

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }

    MonthNav = () => {
        return (
            <span className="label-month">
                {this.month()}
                {this.state.showMonthPopup &&
                    <this.SelectList data={this.months} />
                }
            </span>
        );
    }

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }
    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () => {
        return (
            this.state.showYearNav ?
                <input
                    defaultValue={this.year()}
                    className="editor-year"
                    ref={(yearInput) => { this.yearInput = yearInput }}
                    onKeyUp={(e) => this.onKeyUpYear(e)}
                    onChange={(e) => this.onYearChange(e)}
                    type="number"
                    placeholder="year" />
                :
                <span
                    className="label-year"
                >
                    {this.year()}
                </span>
        );
    }

    onDayClick = (event, day) => {
        this.setState({
            selectedDay: day
        }, () => {
            // console.log("SELECTED DAY: ", this.state.selectedDayFormated);
            // console.log("Fecha formateada: ", this.currentDate());
            // console.log("SELECTED DAY: ", this.state.selectedDay);
        });

        this.props.onDayClick && this.props.onDayClick(event, day);
    }

    formatDate = (year, month, day) => {
        if (day < 10) { }
        return `${year}-${month}-${day}`
    }

    handlerDate = (event) => {
        this.setState({
            eventList: event
        })
    }
    handlerChangeDate = (event) => {
        this.setState({
            changeDate: event
        })
    }

    render() {
        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            // hacer un switch case para convertir los dias de ingles a español
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
            </td>
            );
        }


        // console.log("SELECTED DAY: ", this.state.selectedMonth);
        // console.log("SELECTED MONTH: ", this.state.selectedMonth);
        // console.log("SELECTED YEAR: ", this.state.selectedMonth);

        let daysInMonth = [];  
        // console.log("SELECTED MONTH: ", parseInt(this.state.selectedMonth));
        // console.log("ACTUAL MONTH: ", parseInt(this.state.todayMonth));
        for (let day = 1; day <= this.daysInMonth(); day++) {
            let className = (day == this.currentDay() ? "day current-day" : "day");
            let selectedClass = (day == this.state.selectedDay ? " selected-day " : "")
            let t = day
            // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------> +1 se agrega para colocar el mes extra al actual.
            if (t < parseInt(this.state.today) || parseInt(this.state.todayMonth) > parseInt(this.state.selectedMonth) || parseInt(this.state.selectedMonth) > (parseInt(this.state.todayMonth)) || parseInt(this.year()) < parseInt(this.state.selectedYear)) {
                daysInMonth.push(
                    <td key={day} className={selectedClass + "disable"} disabled>
                        <span className="calendar__days">{day}</span>
                    </td>
                );

            }else{
                daysInMonth.push(
                    <td key={day} className={className + selectedClass} onClick={(e) => { this.onDayClick(e, day) }}>
                        <span className="calendar__days">{day}</span>
                    </td>
                );
            }
        }
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) => {
            return (
                <tr key={i * 100}>
                    {d}
                </tr>
            );
        })
        //<--------------------------------- SEGUNDA FASE --------------------------------->
        let fieldValue = this.state.eventList;
        if (!fieldValue) return false;
        let formatDateIso = this.formatDate(this.year(), this.state.selectedMonth, this.state.selectedDay)
        if (!this.eventList[formatDateIso]) this.eventList[formatDateIso] = [];
        this.eventList[formatDateIso].push(fieldValue);

        let functionTest = this.eventList
        let functionTestLastItem = functionTest[formatDateIso].length - 1 // devuelve el array con todos los item seleccionados (ultimo elemento)

        let arrayValues = []

        arrayValues.push(Object.keys(functionTest)) // devuelve un array con las fechas seleccionadas

        const petList = this.state.eventList.map((value) => {
            return (
                <td key={value} className="week-day"><td>{value}</td><br /></td>
            )
        });

        localStorage.setItem(localStorageName, JSON.stringify());

        // if(Object.values( objectPrueba)[0].length > 0 ){ // entra cuando el objeto tenga mas de una fecha
        //<--------------------------------- SEGUNDA FASE --------------------------------->

        const {close} = this.toggle;

        return (

            <>
                <div className="schedule">

                    <h1 className="schedule__title">ESCOGE LAS FECHAS EN LA QUE VERAS LAS CLASES</h1>
                    <h4 className="schedule__subtitle">Las clases son personalizadas, adaptando cada Sesión a tu manera de Aprender. </h4>
                    <div className="calendar-container" style={this.style}>
                        <table className="calendar">
                            <thead>
                                <tr className="calendar-header">
                                    <td colSpan="6">
                                        <div className="calendar__top">
                                            <div className="calendar__mini_rectangle" onClick={(e) => { this.prevMonth() }}>
                                                <strong className="calendar__button" >Anterior</strong>
                                            </div>
                                            <div className="schedule__information">
                                                <this.MonthNav />
                                                <img className="icon__information" src={information} alt="information" onMouseEnter={() => this.hoverOn()} onMouseLeave={this.hoverOff} />
                                                <span>
                                                {this.state.hover ? 
                                                <div className="schedule__information__rectangle">
                                                        <p className="schedule__information__pop">Acá escogerás las fechas en la que
                                                            veras las clases personalizadas. Después
                                                            de escoger nos estaremos comunicando
                                                            contigo mediante Discord para hacer un
                                                            Plan especifico para ti.
                                                            </p>
                                                    </div> : ""}
                                                    

                                                </span>
                                            </div>
                                            <div className="calendar__mini_rectangle" onClick={(e) => { this.nextMonth() }}>
                                                <strong className="calendar__button" >Siguiente</strong>
                                            </div>
                                        </div>
                                    </td>
                                    <td colSpan="2" className="nav-month">
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {weekdays}
                                </tr>
                                {trElems}
                            </tbody>
                        </table>

                    </div>

                    <div className="selected__date">

                        <SelectedDate
                            handlerDate={this.handlerDate}
                            handlerChangeDate={this.handlerChangeDate}
                            formatDateIso={formatDateIso}
                        />
                        <Agenda
                            currentDay={this.state.selectedDay}
                            dates={this.state.eventList}
                        />
                    </div>
                    <br className="break__line" />
                    <br className="break__line" />
                    <br className="break__line" />
                </div>

            </>

        );
    }
}
