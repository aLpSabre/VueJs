export default {

  contactCoach(context, payload) {
    /* console.log("action worked");
    console.log("paylaod",payload);
    console.log(context.rootGetters); */
    console.log(payload.email);
    const data = {
      userEmail: payload.email,
      id: payload.coachId,
      message: payload.message

    }

    context.commit("saveData", data);
  }
}