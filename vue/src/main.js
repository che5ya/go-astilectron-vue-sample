import Vue from 'vue'
import App from '@/App.vue'
import Vuetify from 'vuetify'
import "vue-material-design-icons/styles.css"
import VTooltip from 'v-tooltip'
import Astor  from '@/Astor.js'
import config  from '@/config.js'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VTooltip);
Vue.use(Vuetify);

Vue.prototype.appConfig = config

Astor.init();

document.addEventListener('astilectron-ready', function() {
  new Vue({
    render: h => h(App),
  }).$mount('#vue');
});


