import React from 'react';
import { connect } from 'react-redux';

// import '../../utils/Calendar';

import '../../assets/styles/components/Calendar.scss';

const AVAILABLE_WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const localStorageName = 'calendar-events';

class CALENDAR extends React.Component {
    constructor(options) {
        this.options = options;
        this.elements = {
            days: this.getFirstElementInsideIdByClassName('calendar-days'),
            week: this.getFirstElementInsideIdByClassName('calendar-week'),
            month: this.getFirstElementInsideIdByClassName('calendar-month'),
            year: this.getFirstElementInsideIdByClassName('calendar-current-year'),
            eventList: this.getFirstElementInsideIdByClassName('current-day-events-list'),
            eventField: this.getFirstElementInsideIdByClassName('add-event-day-field'),
            eventAddBtn: this.getFirstElementInsideIdByClassName('add-event-day-field-btn'),
            eventDeleteBtn: this.getFirstElementInsideIdByClassName('delete-event-day-field-btn'),
            currentDay: this.getFirstElementInsideIdByClassName('calendar-left-side-day'),
            currentWeekDay: this.getFirstElementInsideIdByClassName('calendar-left-side-day-of-week'),
            prevYear: this.getFirstElementInsideIdByClassName('calendar-change-year-slider-prev'),
            nextYear: this.getFirstElementInsideIdByClassName('calendar-change-year-slider-next')
        };

        this.eventList = JSON.parse(localStorage.getItem(localStorageName)) || {};

        this.date = +new Date();
        this.options.maxDays = 37;
        this.init();
    }

// App methods
    init() {
        if (!this.options.id) return false;
        this.eventsTrigger();
        this.drawAll();
    }

    // draw Methods
    drawAll() {
        this.drawWeekDays();
        this.drawMonths();
        this.drawDays();
        this.drawYearAndCurrentDay();
        this.drawEvents();

    }

    drawEvents() {
        let calendar = this.getCalendar();
        let eventList = this.eventList[calendar.active.formatted] || ['There is not any events'];
        let eventTemplate = "";
        eventList.forEach(item => {
            eventTemplate += `<li>${item}</li>`;
        });

        this.elements.eventList.innerHTML = eventTemplate;
    }

    drawYearAndCurrentDay() {
        let calendar = this.getCalendar();
        this.elements.year.innerHTML = calendar.active.year;
        this.elements.currentDay.innerHTML = calendar.active.day;
        this.elements.currentWeekDay.innerHTML = AVAILABLE_WEEK_DAYS[calendar.active.week];
    }

    drawDays() {
        let calendar = this.getCalendar();

        let latestDaysInPrevMonth = this.range(calendar.active.startWeek).map((day, idx) => {
            return {
                dayNumber: this.countOfDaysInMonth(calendar.pMonth) - idx,
                month: new Date(calendar.pMonth).getMonth(),
                year: new Date(calendar.pMonth).getFullYear(),
                currentMonth: false
            }
        }).reverse();


        let daysInActiveMonth = this.range(calendar.active.days).map((day, idx) => {
            let dayNumber = idx + 1;
            let today = new Date();
            return {
                dayNumber,
                today: today.getDate() === dayNumber && today.getFullYear() === calendar.active.year && today.getMonth() === calendar.active.month,
                month: calendar.active.month,
                year: calendar.active.year,
                selected: calendar.active.day === dayNumber,
                currentMonth: true
            }
        });


        let countOfDays = this.options.maxDays - (latestDaysInPrevMonth.length + daysInActiveMonth.length);
        let daysInNextMonth = this.range(countOfDays).map((day, idx) => {
            return {
                dayNumber: idx + 1,
                month: new Date(calendar.nMonth).getMonth(),
                year: new Date(calendar.nMonth).getFullYear(),
                currentMonth: false
            }
        });

        let days = [...latestDaysInPrevMonth, ...daysInActiveMonth, ...daysInNextMonth];

        days = days.map(day => {
            let newDayParams = day;
            let formatted = this.getFormattedDate(new Date(`${Number(day.month) + 1}/${day.dayNumber}/${day.year}`));
            newDayParams.hasEvent = this.eventList[formatted];
            return newDayParams;
        });

        let daysTemplate = "";
        days.forEach(day => {
            daysTemplate += `<li class="${day.currentMonth ? '' : 'another-month'}${day.today ? ' active-day ' : ''}${day.selected ? 'selected-day' : ''}${day.hasEvent ? ' event-day' : ''}" data-day="${day.dayNumber}" data-month="${day.month}" data-year="${day.year}"></li>`
        });

        this.elements.days.innerHTML = daysTemplate;
    }

    drawMonths() {
        let availableMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let monthTemplate = "";
        let calendar = this.getCalendar();
        availableMonths.forEach((month, idx) => {
            monthTemplate += `<li class="${idx === calendar.active.month ? 'active' : ''}" data-month="${idx}">${month}</li>`
        });

        this.elements.month.innerHTML = monthTemplate;
    }

    drawWeekDays() {
        let weekTemplate = "";
        AVAILABLE_WEEK_DAYS.forEach(week => {
            weekTemplate += `<li>${week.slice(0, 3)}</li>`
        });

        this.elements.week.innerHTML = weekTemplate;
    }

    // Service methods
    eventsTrigger() {
        this.elements.prevYear.addEventListener('click', e => {
            let calendar = this.getCalendar();
            this.updateTime(calendar.pYear);
            this.drawAll()
        });

        this.elements.nextYear.addEventListener('click', e => {
            let calendar = this.getCalendar();
            this.updateTime(calendar.nYear);
            this.drawAll()
        });

        this.elements.month.addEventListener('click', e => {
            let calendar = this.getCalendar();
            let month = e.srcElement.getAttribute('data-month');
            if (!month || calendar.active.month == month) return false;

            let newMonth = new Date(calendar.active.tm).setMonth(month);
            this.updateTime(newMonth);
            this.drawAll()
        });


        this.elements.days.addEventListener('click', e => {
            let element = e.srcElement;
            let day = element.getAttribute('data-day');
            let month = element.getAttribute('data-month');
            let year = element.getAttribute('data-year');
            if (!day) return false;
            let strDate = `${Number(month) + 1}/${day}/${year}`;
            this.updateTime(strDate);
            this.drawAll()
        });


        this.elements.eventAddBtn.addEventListener('click', e => {
            let fieldValue = this.elements.eventField.value;
            if (!fieldValue) return false;
            let dateFormatted = this.getFormattedDate(new Date(this.date));
            if (!this.eventList[dateFormatted]) this.eventList[dateFormatted] = [];
            this.eventList[dateFormatted].push(fieldValue);
            console.log(this.eventList)
            localStorage.setItem(localStorageName, JSON.stringify(this.eventList));
            this.drawAll()
        });

        this.elements.eventDeleteBtn.addEventListener('click', e => {
            let fieldValue = this.elements.eventField.value;
            if (!fieldValue) return false;
            let dateFormatted = this.getFormattedDate(new Date(this.date));
            if (!this.eventList[dateFormatted]) this.eventList[dateFormatted] = [];
            this.eventList= []
            console.log(this.eventList[dateFormatted])
            localStorage.setItem(localStorageName, JSON.stringify(this.eventList));
            this.drawAll()
        });


    }


    updateTime(time) {
        this.date = +new Date(time);
    }

    getCalendar() {
        let time = new Date(this.date);

        return {
            active: {
                days: this.countOfDaysInMonth(time),
                startWeek: this.getStartedDayOfWeekByTime(time),
                day: time.getDate(),
                week: time.getDay(),
                month: time.getMonth(),
                year: time.getFullYear(),
                formatted: this.getFormattedDate(time),
                tm: +time
            },
            pMonth: new Date(time.getFullYear(), time.getMonth() - 1, 1),
            nMonth: new Date(time.getFullYear(), time.getMonth() + 1, 1),
            pYear: new Date(new Date(time).getFullYear() - 1, 0, 1),
            nYear: new Date(new Date(time).getFullYear() + 1, 0, 1)
        }
    }

    countOfDaysInMonth(time) {
        let date = this.getMonthAndYear(time);
        return new Date(date.year, date.month + 1, 0).getDate();
    }

    getStartedDayOfWeekByTime(time) {
        let date = this.getMonthAndYear(time);
        return new Date(date.year, date.month, 1).getDay();
    }

    getMonthAndYear(time) {
        let date = new Date(time);
        return {
            year: date.getFullYear(),
            month: date.getMonth()
        }
    }

    getFormattedDate(date) {
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    range(number) {
        return new Array(number).fill().map((e, i) => i);
    }

    getFirstElementInsideIdByClassName(className) {
        return document.getElementById(this.options.id).getElementsByClassName(className)[0];
    }
}


const Coaching = (props) => {
  const { user, data, myClass } = props;

  return (
    <section className="principal">
      <div class="calendar disable-selection" id="calendar">
    <div class="left-side">
        <div class="current-day text-center">
            <h1 class="calendar-left-side-day"></h1>
            <div class="calendar-left-side-day-of-week"></div>
        </div>
        <div class="current-day-events">
            <div>Current Events:</div>
            <ul class="current-day-events-list"></ul>
        </div>
        <div class="add-event-day">
            <select name="" class="add-event-day-field">
                <option value="12:00">12:00 pm</option>
                <option value="13:30">13:30 pm</option>
                <option value="15:00">15:00 pm</option>
                <option value="16:30">16:30 pm</option>
                <option value="18:00">18:00 pm</option>
            </select>

            <span class="fa fa-plus-circle cursor-pointer add-event-day-field-btn"></span>
            <span class="fa fa-trash cursor-pointer delete-event-day-field-btn"></span>
        </div>
    </div>
    <div class="right-side">
        <div class="text-right calendar-change-year">
            <div class="calendar-change-year-slider">
                <span class="fa fa-caret-left cursor-pointer calendar-change-year-slider-prev"></span>
                <span class="calendar-current-year"></span>
                <span class="fa fa-caret-right cursor-pointer calendar-change-year-slider-next"></span>
            </div>
        </div>
        <div class="calendar-month-list">
            <ul class="calendar-month"></ul>
        </div>
        <div class="calendar-week-list">
            <ul class="calendar-week"></ul>
        </div>
        <div class="calendar-day-list">
            <ul class="calendar-days"></ul>
        </div>
    </div>
</div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
    myClass: state.myClass
  };
};

export default connect(mapStateToProps, null)(CALENDAR);