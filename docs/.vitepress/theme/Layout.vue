<template>
  <div class="theme-container">
    <Header></Header>
    <!-- <Sidebar></Sidebar> -->
    <SideBar :open="true">
      <template #sidebar-top>
        <slot name="sidebar-top" />
      </template>
      <template #sidebar-bottom>
        <slot name="sidebar-bottom" />
      </template>
    </SideBar>
    <Page></Page>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 0.1rem solid black;
  background-color: white;
  z-index: 2;
}
.page {
  padding: 3rem 1.5rem 3.5rem 1.5rem;
}
.footer {
  margin-top: 3rem;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.darkmode-layer,
.darkmode-toggle {
  z-index: 3;
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
