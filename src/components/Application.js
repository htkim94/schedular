import React from "react";
import useApplicationData from "hooks/useApplicationData";

import "./Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment/index";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

export default function Application(props) {

  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  const renderAppointments = (arrAppointments, arrInterviewers) => {
    return arrAppointments.map(e => {
      const interview = getInterview(state, e.interview);
      return (
      <Appointment
        key={e.id}
        id={e.id}
        time={e.time}
        interview={interview}
        interviewers={arrInterviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
      )
    })
  }

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {renderAppointments(dailyAppointments, dailyInterviewers)}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
