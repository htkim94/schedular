export function getAppointmentsForDay(state, day) {
  const result = [];
  if (state.days.length === 0) return result;
  for (let d of state.days) {
    if (d.name === day) {
      d.appointments.map(e => result.push(state.appointments[e]));
    }
  }
  return result;
}

export const getInterview = (state, interviewObj) => {
  if (!interviewObj) return null;
  const result = {
    student: interviewObj.student,
    interviewer: state.interviewers[interviewObj.interviewer]
  }
  return result;
}

export const getInterviewersForDay = (state, day) => {
  const result = [];
  for (let d of state.days) {
    if (d.name === day) {
      d.interviewers.map(e => result.push(state.interviewers[e]));
    }
  }
  return result;
}