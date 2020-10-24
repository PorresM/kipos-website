<template>
  <form id="loginForm" @submit="checkForm">
    <div v-if="errors.length" class="form-group">
      <p>Please correct the following error(s):</p>
      <ul>
        <li v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" v-model="email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div class="form-group">
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
import AuthService from "@/services/AuthService";
import EventBus from "@/common/EventBus";

export default {
  name: "Login",
  data() {
    return {
      errors: [],
      email: null,
      password: null
    };
  },
  mounted() {
    EventBus.on("error", message => {
      this.errors.push(this.$t(message));
    });
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) {
        AuthService.login(this.email, this.password);
      }
      e.preventDefault();
    },
    validEmail: function(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style scoped></style>
