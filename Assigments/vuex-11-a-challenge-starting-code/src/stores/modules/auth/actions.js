export default{
  changeAuth(context,payload){
    context.commit("changeAuth",{isAuth:payload.isAuth})
  }
}