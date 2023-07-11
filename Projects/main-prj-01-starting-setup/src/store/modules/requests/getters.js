export default {

  requests(state, _, _2, rootGetters) {
    const requests = state.requests;

    return requests.filter(
      (request) => request.id === rootGetters.userId
    );
  },
  hasRequests(_,getters) {
    return getters.requests && getters.requests.length;
  },
  isCoach(_, getters, _2, rootGetters) {

    return getters.coaches.some(coach => coach.id === rootGetters.userId)
  }

}