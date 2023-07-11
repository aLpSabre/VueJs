export default{
  saveData(state,payload){
    state.requests.push(payload);
  }

}