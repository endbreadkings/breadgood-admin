import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: "#4579FF",
        secondary: "#FEBE52",
        accent: "#80A3FF",
        error: "#FF0000",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        grey900: "#333333",
        grey700: "#707070"
      }
    }
  }
});
