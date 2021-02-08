import Layout from "./Layout.vue";
import DefaultTheme from "vitepress/theme";
import Header from "./components/Header.vue";

export default {
  ...DefaultTheme,
  // Layout,
  //  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component("Header", Header);

    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
