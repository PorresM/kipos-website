<template>
  <div class="container">
    <div>
      <img src="../../assets/kipos-logo.svg" />
    </div>
    <div>
      <input />
      <Select />
      <a>PR</a>
    </div>
  </div>
</template>

<script>
import Select from "@/components/common/input/Select";
export default {
  name: "Menu",
  components: { Select }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;

  img {
    width: 200px;
  }
}
</style>
