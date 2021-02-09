<template>
  <div class="footer">
    <div class="themeInfo footerItem">vitepress-theme-book</div>
    <div class="authorInfo footerItem">powered by {{ author }}</div>
    <div class="icpInfo footerItem">{{ record }}</div>
    <div class="gaInfro footerItem">{{ cyberSecurityRecord }}</div>
    <div class="time footerItem">
      {{ startYear }}-{{ new Date().getFullYear() }}
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  setup() {
    const internalInstance = getCurrentInstance();
    const globalProperties =
      internalInstance.appContext.config.globalProperties;

    const author = globalProperties.$site.themeConfig.author;
    const record = globalProperties.$site.themeConfig.record;
    const recordLink = globalProperties.$site.themeConfig.recordLink;
    const cyberSecurityRecord =
      globalProperties.$site.themeConfig.cyberSecurityRecord;
    const cyberSecurityLink =
      globalProperties.$site.themeConfig.cyberSecurityLink;
    const startYear = globalProperties.$site.themeConfig.startYear;

    return {
      author,
      record,
      recordLink,
      cyberSecurityRecord,
      cyberSecurityLink,
      startYear,
    };
  },
};
</script>

<style>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.footerItem {
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>