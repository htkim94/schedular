import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then(all => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  }, []);

  function updateSpotsRemaining(day, days, appointments) {
    const selectedDay = days.find(element => element.name === day);
    const updatedSpots = selectedDay.appointments.filter(appointmentId => (!appointments[appointmentId].interview)).length;
    const newDays = [...days];

    return newDays.map(d => d.name === day ? { ...d, spots: updatedSpots } : d);
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const days = updateSpotsRemaining(state.day, state.days, appointments);

    return axios.put(`/api/appointments/${id}`, {interview})
    .then(() => {
      setState({...state, days, appointments});
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const days = updateSpotsRemaining(state.day, state.days, appointments);

    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState({...state, days, appointments});
    });
  }

  return {
    state, setDay, bookInterview, cancelInterview
  }
}