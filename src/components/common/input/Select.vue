<template>
  <div class="custom-select">
    <select
      @focusin="toggleSelect($event, true)"
      @blur="toggleSelect($event, false)"
      @change="toggleSelect($event, false)"
    >
      <option>Wallet 1</option>
      <option>Wallet 2</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  methods: {
    toggleSelect(event, isFocus) {
      const searchBar = event.target.closest(".custom-select").classList;
      if (isFocus) {
        searchBar.add("active");
      } else {
        searchBar.remove("active");
        event.target.blur();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-select {
  outline: none;
  display: inline-block;
  vertical-align: top;
  position: relative;

  select {
    padding-top: 10px;
    padding-right: 30px;
    padding-bottom: 10px;
    padding-left: 20px;
  }
}

.custom-select:before {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  right: 18px;
}

.custom-select.active:before {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.custom-select:after {
  right: 13px;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.custom-select.active:after {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.custom-select:before,
.custom-select:after {
  background: #000000;
  content: "";
  display: block;
  height: 1px;
  position: absolute;
  top: calc(50% - 1px);
  width: 8px;
  -webkit-transition: transform 0.25s;
  -ms-transition: transform 0.25s;
  -o-transition: transform 0.25s;
  transition: transform 0.25s;
}
</style>
