import { createStore } from "vuex";
import auth from "./modules/auth";
import products from "./modules/products";


const store =createStore({
  state(){
    return{}
  },
  modules:{
    auth: auth,
    products:products

  }
});

export default store;