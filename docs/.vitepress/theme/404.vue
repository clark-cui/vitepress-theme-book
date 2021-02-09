<template>
  <div class="notfound">
    <div class="notText">404</div>
    <div class="backButton" @click="backHome">back Home</div>
  </div>
</template>

<script>
export default {
  setup() {
    const backHome = () => {
      location.href = "/";
    };
    return {
      backHome,
    };
  },
};
</script>

<style>
.notfound {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.notText {
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: 1rem;
}
.backButton {
  font-size: 1rem;
  border: 0.1rem solid black;
  padding: 0.3rem;
}
</style>