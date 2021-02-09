<template>
  <div class="sidebar">
    <div class="sidebar_left">
      <div class="sidebar_navItem" v-for="item in navList" @click="goNav(item)">
        {{ item.text }}
      </div>
      <div class="sidebar_github" @click="goGithub">Github</div>
    </div>
    <div class="sidebar_right"></div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";

export default {
  setup() {
    const internalInstance = getCurrentInstance();
    const globalProperties =
      internalInstance.appContext.config.globalProperties;

    const navList = globalProperties.$site.themeConfig.nav;
    const goNav = (item) => {
      location.href = item.link;
    };
    const goGithub = () => {
      location.href =
        globalProperties.$site.themeConfig.blogConfig.socialLinks[0].link;
    };
    return {
      navList,
      goNav,
      goGithub,
    };
  },
};
</script>

<style>
</style>