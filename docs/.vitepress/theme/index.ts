import Layout from "./Layout.vue";
import NotFound from "./404.vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Page from "./components/Page.vue";
import Footer from "./components/Footer.vue";
import DefaultTheme from "vitepress/theme";
export default {
  // Layout,
  // NotFound,
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component("Header", Header);
    app.component("Sidebar", Sidebar);
    app.component("Page", Page);
    app.component("Footer", Footer);

    app.use(router);
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
