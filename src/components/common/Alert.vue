<template>
  <div v-show="alertClass !== ''" :class="`alert ${alertClass}`" role="alert">
    {{ message }}
  </div>
</template>

<script>
import EventBus from "@/common/EventBus";

export default {
  name: "Alert",
  data() {
    return {
      message: "",
      alertClass: ""
    };
  },
  mounted() {
    EventBus.on("success", this.displaySuccess);
    EventBus.on("error", this.displayError);
  },
  methods: {
    displaySuccess(message) {
      this.alertClass = "alert-success";
      this.message = this.$t(message);
      setTimeout(this.hideAlert, 3000);
    },

    displayError(message) {
      this.alertClass = "alert-danger";
      this.message = this.$t(message);
    },
    hideAlert() {
      this.alertClass = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.alert {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 0;
  text-align: center;
}

.alert-danger {
  color: $alert-danger-font;
  background-color: $alert-danger-background;
  border: solid 1px $alert-danger-font;
}

.alert-success {
  color: $alert-success-font;
  background-color: $alert-success-background;
  border: solid 1px $alert-success-font;
}
</style>
