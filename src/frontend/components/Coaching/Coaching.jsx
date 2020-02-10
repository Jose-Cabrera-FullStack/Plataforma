import React from 'react';
import moment from 'moment';
import Agenda from './Agenda';
import SelectedDate from './SelectedDate';
import '../../assets/styles/components/Calendar.scss';

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

        this.eventList = {}; // array with all dates choosen

    }


    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();

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
            <span className="label-month"
                onClick={(e) => { this.onChangeMonth(e, this.month()) }}>
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
                    onDoubleClick={(e) => { this.showYearEditor() }}>
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
        if(day < 10){}
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
        for (let day = 1; day <= this.daysInMonth(); day++) {
            let className = (day == this.currentDay() ? "day current-day" : "day");
            let selectedClass = (day == this.state.selectedDay ? " selected-day " : "")
            let t = day

            if (t < parseInt(this.state.today) || parseInt(this.state.todayMonth) > parseInt(this.state.selectedMonth) || parseInt(this.year()) < parseInt(this.state.selectedYear)) {
                daysInMonth.push(
                    <td key={day} className={"disable"} disabled>
                        <span>{day}</span>
                    </td>
                );
            } else {
                daysInMonth.push(
                    <td key={day} className={className + selectedClass} onClick={(e) => { this.onDayClick(e, day) }}>
                        <span>{day}</span>
                    </td>
                );
            }
        }
        // console.log("days: ", daysInMonth);

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
        //<--------------------------------- Experimentos --------------------------------->
        let fieldValue = this.state.eventList;
        if (!fieldValue) return false;
        let formatDateIso = this.formatDate(this.year(), this.state.selectedMonth, this.state.selectedDay)
        if (!this.eventList[formatDateIso]) this.eventList[formatDateIso] = [];
        this.eventList[formatDateIso].push(fieldValue);
        
        let functionTest = this.eventList
        let functionTestLastItem = functionTest[formatDateIso].length - 1 // devuelve el array con todos los item seleccionados 
        
        let arrayValues = []

        arrayValues.push(Object.keys(functionTest))
        
        const petList = Object.entries(functionTest).map(([key,value])=>{
            let aux = Object.keys(functionTest)

                return (
                    <div key={key.toString()}>{key} : <tr>{value}</tr></div>
                );
            
          })
        arrayValues.forEach(function(item) {
            for(let date in item){
                if(item[date] != formatDateIso){
                    console.log("funciona")
                }else{
                    console.log("no funciona")
                }
            }
        } )
        
        // console.info(Object.keys(functionTest))
        
        localStorage.setItem(localStorageName, JSON.stringify(functionTest));
        this.state.eventList = []
        
        // if(Object.values( objectPrueba)[0].length > 0 ){ // entra cuando el objeto tenga mas de una fecha
        //<--------------------------------- Experimentos --------------------------------->

        return (

            <>

                <div className="calendar-container" style={this.style}>
                    <table className="calendar">
                        <thead>

                            <tr className="calendar-header">
                                <td colSpan="6">
                                    <this.MonthNav />
                                    {" "}
                                    <this.YearNav />
                                </td>
                                <td colSpan="2" className="nav-month">
                                    <i className="prev fa fa-fw prueba"
                                        onClick={(e) => { this.prevMonth() }}>
                                    </i>
                                    <i className="prev fa fa-fw prueba"
                                        onClick={(e) => { this.nextMonth() }}>
                                    </i>
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
                <SelectedDate
                    handlerDate={this.handlerDate}
                    handlerChangeDate={this.handlerChangeDate}
                    valueState={this.state.changeDate}
                />
                <Agenda
                    currentDay={this.state.selectedDay}
                    currentDayFormated={this.state.selectedDayFormated}
                />
                <p>{petList}</p><br/>
            </>

        );
    }
}
