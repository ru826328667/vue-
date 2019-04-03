import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
     showFooter: true,
     changableNum:1234
     //要设置的初始属性值
   };
const mutations={

}
 const store = new Vuex.Store({
       state,
       mutations
    });
 
export default store;
