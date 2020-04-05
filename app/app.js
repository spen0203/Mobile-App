import Vue from "nativescript-vue";
import App from "./components/App";
import Vuelidate from 'vuelidate';
import Home from "./components/Home";
import DrawerContent from "./components/DrawerContent";
import Vuex from 'vuex';
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import Vuelidate from "vuelidate";
Vue.use(RadSideDrawer);
Vue.use(Vuex);
Vue.use(Vuelidate);
Vue.config.silent = (TNS_ENV === 'production');
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Home, { slot: 'mainContent' })
          ]
        )
      }
  }).$start();
