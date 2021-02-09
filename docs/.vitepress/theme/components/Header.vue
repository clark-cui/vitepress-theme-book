 
<template>
  <div class="navbar">
    <div class="navLeft">
      <div class="sideButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          viewBox="0 0 448 512"
          class="icon"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          ></path>
        </svg>
      </div>
      <div class="siteTitle">
        {{ siteTitle }}
      </div>
    </div>
    <div class="navContent">
      <div class="navItem" v-for="item in navList" @click="goNav(item)">
        {{ item.text }}
      </div>
    </div>
    <div class="navRight">
      <div class="tabSearch">
        <input
          type="text"
          class="search-input"
          id="search_input"
          placeholder="搜索文档"
        />
      </div>
      <div class="tabGithub" @click="goGithub">Github</div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  setup(props, context) {
    const internalInstance = getCurrentInstance();
    console.log(internalInstance, "internalInstance");
    const globalProperties =
      internalInstance.appContext.config.globalProperties;

    console.log(globalProperties, "globalProperties");
    const siteTitle = globalProperties.$site.title;

    const navList = globalProperties.$site.themeConfig.nav;
    const goNav = (item) => {
      location.href = item.link;
    };
    const goGithub = () => {
      location.href =
        globalProperties.$site.themeConfig.blogConfig.socialLinks[0].link;
    };
    return {
      siteTitle,
      navList,
      goNav,
      goGithub,
    };
  },
};
</script >

<style lang="css" scoped>
@import url("../styles/Header.css");
</style>