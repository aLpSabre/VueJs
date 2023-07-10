export default{

  saveData(context,payload){
    /* console.log("action worked");
    console.log("paylaod",payload);
    console.log(context.rootGetters); */
    const data={
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName:payload.last,
      description: payload.desc,
      areas:payload.areas,
      hourlyRate:payload.rate

    }

    context.commit("saveData",data);
  }
}