<template>
  <div class="container">
    <img src="../../assets/kipos-logo.svg" />
    <p class="center">“{{ $t("baseline") }}”</p>
    <form id="signup-form" @submit="checkForm">
      <div class="form-group center">
        <input
          id="email"
          type="email"
          v-model="email"
          :placeholder="$t('form.signup.email')"
          required
        />
      </div>
      <div class="form-group center">
        <input
          id="password"
          type="password"
          v-model="password"
          :placeholder="$t('form.signup.password')"
          required
        />
      </div>
      <div class="form-group center">
        <input
          id="confirm-password"
          type="password"
          v-model="confirmPassword"
          :placeholder="$t('form.signup.confirmPassword')"
          required
        />
      </div>
      <div class="form-group center">
        <button type="submit">
          {{ $t("form.signup.submit") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
import EventBus from "@/common/EventBus";
export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      confirmPassword: null
    };
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      if (this.password !== this.confirmPassword) {
        EventBus.emit("error", "error.confirmPassword");
        return;
      }
      AuthService.signup(this.email, this.password);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  // 362px = size of the signup block
  // 300px = size of the footer
  margin-top: max(0px, calc((100vh - 362px - 300px) * 0.5));
  text-align: center;
  width: 100%;
}

input {
  width: 360px;
}

img {
  width: 200px;
  margin: 20px;
}
</style>
