<template>
  <div />
</template>

<script>
export default {
  name: "Logout",
  created() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.$router.push({ name: "Home" });
  }
};
</script>

<style scoped></style>
