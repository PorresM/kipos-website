<template>
  <div class="container">
    <img src="../../assets/kipos-logo.svg" />
    <p class="center">“{{ $t("baseline") }}”</p>
    <form id="loginForm" @submit="checkForm">
      <div class="form-group center">
        <input
          id="email"
          type="email"
          v-model="email"
          :placeholder="$t('form.login.email')"
          required
        />
      </div>
      <div class="form-group center">
        <input
          id="password"
          type="password"
          v-model="password"
          :placeholder="$t('form.login.password')"
          required
        />
      </div>
      <div class="form-group center">
        <button type="submit">
          {{ $t("form.login.submit") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    checkForm: function(e) {
      AuthService.login(this.email, this.password);
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  // 362px = size of the login block
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
