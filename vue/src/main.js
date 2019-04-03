// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import 'lib-flexible'//弹性布局
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)//vue tittle
Vue.config.productionTip = false//阻止 vue 在启动时生成生产提示。
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
