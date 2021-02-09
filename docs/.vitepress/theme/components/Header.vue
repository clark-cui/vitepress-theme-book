 
<template>
  <div class="navbar">
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
</template>

<script>
import { getCurrentInstance } from "vue";

export default {
  setup(props, context) {
    const internalInstance = getCurrentInstance();
    const globalProperties =
      internalInstance.appContext.config.globalProperties;

    const routers = globalProperties.$router;
    console.log(globalProperties, "routers");
    const siteTitle = globalProperties.$site.title;

  
    return {
      siteTitle,
    };
  },
};
</script >

<style lang="css" scoped>
@import url("../styles/Header.css");
</style>