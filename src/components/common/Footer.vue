<template>
  <footer>
    <img src="../../assets/kipos-logo-white.svg" />
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

footer {
  height: 300px;
  background-image: $color-gradient-main;

  img {
    width: 200px;
    margin: 115px;
  }
}
</style>
