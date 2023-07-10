export default {

  coaches(state) {
    return state.coaches
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length;
  },
  isCoach(_, getters, _2, rootGetters) {

    return getters.coaches.some(coach => coach.id === rootGetters.userId)
  }

}