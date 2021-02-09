<template>
  <div class="theme-container">
    <section>
      <Header></Header>
      <Sidebar></Sidebar>
      <Page></Page>
    </section>

    <Footer></Footer>
  </div>
</template>
<script>
import Darkmode from "darkmode-js";

export default {
  setup(props, context) {
    // dark-mode
    const options = {
      bottom: "64px", // default: '32px'
      right: "unset", // default: '32px'
      left: "32px", // default: 'unset'
      time: "0.5s", // default: '0.3s'
      mixColor: "#fff", // default: '#fff'
      backgroundColor: "#fff", // default: '#fff'
      buttonColorDark: "#100f2c", // default: '#100f2c'
      buttonColorLight: "#fff", // default: '#fff'
      saveInCookies: false, // default: true,
      label: "🌓", // default: ''
      autoMatchOsTheme: true, // default: true
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();
  },
};
</script>

<style>
.theme-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* relative rem */
html {
  font-size: 10px; /*默认以设计稿为基准,将设计稿除100*/
}

@media only screen and (min-width: 480px) and (max-width: 720px) {
  html {
    font-size: 12px;
  }
}
@media only screen and (min-width: 721px) and (max-width: 1366px) {
  html {
    font-size: 13.6px;
  }
  .sidebar {
    display: none;
  }
}
@media only screen and (min-width: 1367px) {
  html {
    font-size: 15px;
  }
  .sidebar {
    display: none;
  }
}
</style>